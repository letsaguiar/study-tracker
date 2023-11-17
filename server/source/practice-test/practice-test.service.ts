import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import BigNumber from 'bignumber.js';
import { Repository } from 'typeorm';
import { PracticeTestCreateDto, PracticeTestUpdateDto } from './practice-test.dto.in';
import { PracticeTest, PracticeTestDto, PracticeTestSubjectSummaryDto, PracticeTestSummaryDto } from './practice-test.dto.out';

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

	private getTotalNumberOfQuestions(practice_tests: PracticeTest[]): number
	{
		return practice_tests.reduce((acc, practice_test) => acc + practice_test.number_of_questions, 0);
	}

	private getTotalNumberOfHits(practice_tests: PracticeTest[]): number
	{
		return practice_tests.reduce((acc, practice_test) => acc + practice_test.number_of_hits, 0);
	}

	private getSubjectSummary(practice_tests: PracticeTest[]): PracticeTestSubjectSummaryDto[]
	{
		const subject_map: Record<string, PracticeTestSubjectSummaryDto> = {};

		for (const test of practice_tests)
		{
			const subject_entry = subject_map[test.subject.id];

			if (subject_entry)
			{
				subject_entry.number_of_questions += test.number_of_questions;
				subject_entry.number_of_hits += test.number_of_hits;
			}
			else
			{
				subject_map[test.subject.id] = {
					subject: test.subject,
					number_of_questions: test.number_of_questions,
					number_of_hits: test.number_of_hits,
					hit_rate: 0,
				};
			}
		}

		return Object.values(subject_map).map((subject_summary) => ({
			...subject_summary, hit_rate: this.getHitRate(subject_summary.number_of_questions, subject_summary.number_of_hits),
		}));
	}

	public async getSummary(): Promise<PracticeTestSummaryDto>
	{
		const practice_tests = await this.practiceTestRepository.find({ relations: [ 'subject' ] });
		const number_of_questions = this.getTotalNumberOfQuestions(practice_tests);
		const number_of_hits = this.getTotalNumberOfHits(practice_tests);
		const hit_rate = this.getHitRate(number_of_questions, number_of_hits);
		const by_subject = this.getSubjectSummary(practice_tests);

		return ({ number_of_questions, number_of_hits, hit_rate, by_subject });
	}
}