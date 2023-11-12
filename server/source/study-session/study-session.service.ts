import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudySessionCreateDto, StudySessionUpdateDto } from './study-session.dto.in';
import { StudySession, StudySessionSumary, StudySessionSummaryBySubject } from './study-session.dto.out';
import * as dayjs from 'dayjs';

@Injectable()
export class StudySessionService
{

	public constructor(
		@InjectRepository(StudySession)
		private readonly studySessionRepository: Repository<StudySession>,
	) { }
	
	public async create(params: StudySessionCreateDto): Promise<StudySession>
	{
		const study_session = this.studySessionRepository.create(params);
		await this.studySessionRepository.save(study_session);
		return (study_session);
	}

	public async update(id: string, params: StudySessionUpdateDto): Promise<void>
	{
		await this.studySessionRepository.update(id, params);
	}

	public async getOne(id: string): Promise<StudySession>
	{
		return this.studySessionRepository.findOne({ where: { id }, relations: ['subject'] });
	}

	public async getMany(): Promise<StudySession[]>
	{
		return this.studySessionRepository.find({ relations: [ 'subject' ] });
	}

	public async delete(id: string): Promise<void>
	{
		await this.studySessionRepository.delete(id);
	}

	private getStudySessionTotalDuration(study_sessions: StudySession[]): number
	{
		return study_sessions.reduce((total, study_session) =>
		{
			const init = dayjs(study_session.init);
			const end = dayjs(study_session.end);
			return total + end.diff(init, 'minute');
		}, 0);
	}

	private getStudySessionSummaryBySubject(study_sessions: StudySession[]): StudySessionSummaryBySubject[]
	{
		const summary: StudySessionSummaryBySubject[] = [];
		study_sessions.forEach((study_session) => 
		{
			const subjectSummary = summary.find((summary) => summary.subject.id === study_session.subject.id);
			if (subjectSummary)
				subjectSummary.total += this.getStudySessionTotalDuration([study_session]);
			else
				summary.push({
					subject: study_session.subject,
					total: this.getStudySessionTotalDuration([study_session]),
				});
		});
		
		return (summary);
	}

	public async getSummary(): Promise<StudySessionSumary>
	{
		const subjects = await this.getMany();
		const total = this.getStudySessionTotalDuration(subjects);
		const by_subject = this.getStudySessionSummaryBySubject(subjects);
		
		return ({ total, by_subject });
	}
}