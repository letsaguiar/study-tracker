import { Injectable } from '@nestjs/common';
import { Exam } from './exam.dto.out';
import { ExamCreateDto, ExamUpdateDto } from './exam.dto.in';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ExamService
{

	public constructor(
		@InjectRepository(Exam)
		private readonly examRepository:  Repository<Exam>,
	) { }

	public async create(params: ExamCreateDto): Promise<Exam>
	{
		const exam = this.examRepository.create(params);
		await this.examRepository.save(exam);
		return (exam);
	}

	public async update(id: string, params: ExamUpdateDto): Promise<void>
	{
		await this.examRepository.update(id, params);
	}

	public async getOne(id: string): Promise<Exam>
	{
		return (this.examRepository.findOne({ where: { id } }));
	}

	public async getMany(): Promise<Exam[]>
	{
		return (this.examRepository.find());
	}

	public async delete(id: string): Promise<void>
	{
		await this.examRepository.delete(id);
	}

}
