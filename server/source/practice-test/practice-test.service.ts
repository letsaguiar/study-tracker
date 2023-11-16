import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PracticeTestCreateDto, PracticeTestUpdateDto } from './practice-test.dto.in';
import { PracticeTest } from './practice-test.dto.out';

@Injectable()
export class PracticeTestService
{
	public constructor(
		@InjectRepository(PracticeTest)
		private readonly practiceTestRepository: Repository<PracticeTest>,
	) { }

	public async create(params: PracticeTestCreateDto): Promise<PracticeTest>
	{
		const practice_test = this.practiceTestRepository.create(params);
		await this.practiceTestRepository.save(practice_test);
		return (practice_test);
	}

	public async update(id: string, params: PracticeTestUpdateDto): Promise<void>
	{
		await this.practiceTestRepository.update(id, params);
	}

	public async getOne(id: string): Promise<PracticeTest>
	{
		return this.practiceTestRepository.findOne({ where: { id }, relations: ['subject'] });
	}

	public async getMany(): Promise<PracticeTest[]>
	{
		return this.practiceTestRepository.find({ relations: [ 'subject' ], order: { date: 'DESC' } });
	}

	public async delete(id: string): Promise<void>
	{
		await this.practiceTestRepository.delete(id);
	}

}