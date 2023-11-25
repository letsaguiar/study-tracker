import { PartialType, PickType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsInt, IsOptional, ValidateNested } from 'class-validator';
import { ExamIdDto } from '../exam/exam.dto.in';
import { PracticeExamDto } from './practice-exam.dto.out';

export class PracticeExamIdDto extends PickType(PracticeExamDto, ['id']) { }

export class PracticeExamCreateDto extends PickType(PracticeExamDto, ['exam', 'date', 'number_of_questions', 'number_of_hits']) { }

export class PracticeExamUpdateDto extends PartialType(PracticeExamCreateDto) 
{

	@ValidateNested()
	@Type(() => ExamIdDto)
	@IsOptional()
	public exam?: ExamIdDto;

	@IsDate()
	@Type(() => Date)
	@IsOptional()
	public date?: Date;

	@IsInt()
	@IsOptional()
	public number_of_questions?: number;

	@IsInt()
	@IsOptional()
	public number_of_hits?: number;

}