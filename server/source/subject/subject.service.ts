import { Injectable } from '@nestjs/common';
import { Subject } from './subject.dto.out';
import { SubjectCreateDto, SubjectUpdateDto } from './subject.dto.in';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SubjectService
{
	public constructor(
		@InjectRepository(Subject)
		private readonly subjectRepository: Repository<Subject>,
	) { }

	public async create(params: SubjectCreateDto): Promise<Subject>
	{
		const subject = this.subjectRepository.create(params);
		await this.subjectRepository.save(subject);
		return (subject);
	}

	public async update(id: string, params: SubjectUpdateDto): Promise<void>
	{
		await this.subjectRepository.update(id, params);
	}

	public async getOne(id: string): Promise<Subject>
	{
		return this.subjectRepository.findOne({ where: { id }, relations: ['parent'] });
	}

	public async getMany(): Promise<Subject[]>
	{
		return this.subjectRepository.find({ relations: ['parent'] });
	}

	public async delete(id: string): Promise<void>
	{
		await this.subjectRepository.delete(id);
	}
}
