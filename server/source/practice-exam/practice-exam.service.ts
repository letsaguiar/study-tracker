import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PracticeExamCreateDto, PracticeExamUpdateDto } from './practice-exam.dto.in';
import { PracticeExamDto } from './practice-exam.dto.out';
import { PracticeExam } from './practice-exam.entity';

@Injectable()
export class PracticeExamService
{

	public constructor(
		@InjectRepository(PracticeExam)
		private readonly practiceExamRepository: Repository<PracticeExam>
	) { }

	public async create(params: PracticeExamCreateDto): Promise<PracticeExamDto>
	{
		const practiceExam = this.practiceExamRepository.create(params);
		await this.practiceExamRepository.save(practiceExam);

		return practiceExam;
	}

	public async update(id: string, params: PracticeExamUpdateDto): Promise<void>
	{
		await this.practiceExamRepository.update(id, params);
	}

	public async getOne(id: string): Promise<PracticeExamDto>
	{
		return this.practiceExamRepository.findOne({ where: { id }, relations: ['exam'] });
	}

	public async getMany(): Promise<PracticeExamDto[]>
	{
		return this.practiceExamRepository.find({ relations: ['exam'] });
	}

	public async delete(id: string): Promise<void>
	{
		await this.practiceExamRepository.delete(id);
	}

}