import { Type } from 'class-transformer';
import { IsDate, IsInt, IsNotEmptyObject, IsObject, IsUUID, ValidateNested } from 'class-validator';
import { ExamIdDto } from '../exam/exam.dto.in';

export class PracticeExamDto
{

	@IsUUID()
	public id: string;

	@IsObject()
	@IsNotEmptyObject()
	@ValidateNested()
	@Type(() => ExamIdDto)
	public exam: ExamIdDto;

	@IsDate()
	@Type(() => Date)
	public date: Date;

	@IsInt()
	public number_of_questions: number;

	@IsInt()
	public number_of_hits: number;

	@IsDate()
	@Type(() => Date)
	public created_at: Date;

	@IsDate()
	@Type(() => Date)
	public updated_at: Date;

}