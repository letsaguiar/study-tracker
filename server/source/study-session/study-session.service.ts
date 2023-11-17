import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudySessionCreateDto, StudySessionUpdateDto } from './study-session.dto.in';
import { StudySession, StudySessionSubjectSummary, StudySessionSumaryDto } from './study-session.dto.out';
import dayjs from 'dayjs';

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

	private getDuration(init: Date, end: Date): number
	{
		const d1 = dayjs(init);
		const d2 = dayjs(end);

		return (d2.diff(d1, 'minute'));
	}

	private getTotalDuration(study_sessions: StudySession[]): number
	{
		let total = 0;
		for (const session of study_sessions)
			total += this.getDuration(session.init, session.end);

		return (total);
	}

	private getSubjectSummary(study_sessions: StudySession[]): StudySessionSubjectSummary[]
	{
		const subject_map: Record<string, StudySessionSubjectSummary> = {};

		for (const session of study_sessions)
		{
			const subject_entry = subject_map[session.subject.id];

			if (subject_entry)
				subject_entry.duration += this.getDuration(session.init, session.end);
			else
			{
				subject_map[session.subject.id] = {
					subject: session.subject,
					duration: this.getDuration(session.init, session.end),
				};
			}
		}

		return Object.values(subject_map);
	}

	public async getSummary(): Promise<StudySessionSumaryDto>
	{
		const study_sessions = await this.getMany();
		const duration = this.getTotalDuration(study_sessions);
		const by_subject = this.getSubjectSummary(study_sessions);

		return ({ duration, by_subject });
	}
	
}