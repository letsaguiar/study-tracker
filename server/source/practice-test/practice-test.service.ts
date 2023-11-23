import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import BigNumber from 'bignumber.js';
import { Repository } from 'typeorm';
import { PracticeTestCreateDto, PracticeTestUpdateDto } from './practice-test.dto.in';
import { PracticeTest, PracticeTestDto  } from './practice-test.dto.out';

@Injectable()
export class PracticeTestService
{
	public constructor(
		@InjectRepository(PracticeTest)
		private readonly practiceTestRepository: Repository<PracticeTest>,
	) { }

	private getHitRate(number_of_questions: number, number_of_hits: number): number
	{
		return new BigNumber(number_of_hits)
			.dividedBy(number_of_questions)
			.multipliedBy(100)
			.decimalPlaces(2)
			.toNumber();
	}

	private buildPracticeTestDto(practice_test: PracticeTest): PracticeTestDto
	{
		const hit_rate = this.getHitRate(practice_test.number_of_questions, practice_test.number_of_hits);
		return ({ ...practice_test, hit_rate });
	}

	public async create(params: PracticeTestCreateDto): Promise<PracticeTestDto>
	{
		const practice_test = this.practiceTestRepository.create(params);
		await this.practiceTestRepository.save(practice_test);
		return (this.buildPracticeTestDto(practice_test));
	}

	public async update(id: string, params: PracticeTestUpdateDto): Promise<void>
	{
		await this.practiceTestRepository.update(id, params);
	}

	public async getOne(id: string): Promise<PracticeTestDto>
	{
		const practice_test = await this.practiceTestRepository.findOne({ where: { id }, relations: ['subject'] });
		return (this.buildPracticeTestDto(practice_test));
	}

	public async getMany(): Promise<PracticeTestDto[]>
	{
		const practice_tests = await this.practiceTestRepository.find({ relations: [ 'subject' ], order: { date: 'DESC' } });
		return (practice_tests.map((practice_test) => this.buildPracticeTestDto(practice_test)));
	}

	public async delete(id: string): Promise<void>
	{
		await this.practiceTestRepository.delete(id);
	}

}
