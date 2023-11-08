import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudySessionCreateDto, StudySessionUpdateDto } from './study-session.dto.in';
import { StudySession } from './study-session.dto.out';

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

}