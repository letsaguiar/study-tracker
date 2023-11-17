import { Type } from 'class-transformer';
import { IsISO8601, IsNotEmptyObject, IsNumber, IsObject, IsUUID, ValidateNested } from 'class-validator';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { SubjectIdDto } from '../subject/subject.dto.in';
import { Subject } from '../subject/subject.dto.out';

@Entity()
export class PracticeTest
{

	@PrimaryGeneratedColumn('uuid')
	@IsUUID()
	public id: string;

	@ManyToOne(() => Subject, (subject) => subject.practice_tests, { onDelete: 'CASCADE' })
	@IsObject()
	@IsNotEmptyObject()
	@ValidateNested()
	@Type(() => SubjectIdDto)
	public subject: Subject; 

	@Column()
	@IsNumber()
	@Type(() => Number)
	public number_of_questions: number;

	@Column()
	@IsNumber()
	@Type(() => Number)
	public number_of_hits: number;

	@Column()
	@IsISO8601()
	public date: string;

	@CreateDateColumn()
	@IsISO8601()
	public created_at: string;

	@UpdateDateColumn()
	@IsISO8601()
	public updated_at: string;

}

export class PracticeTestSummaryDto
{

	@IsNumber()
	public number_of_questions: number;

	@IsNumber()
	public number_of_hits: number;

	@IsNumber()
	public hit_rate: number;

	@IsObject({ each: true })
	public by_subject: PracticeTestSubjectSummary[];
	
}

class PracticeTestSubjectSummary
{
	
	@IsNumber()
	public number_of_questions: number;

	@IsNumber()
	public number_of_hits: number;

	@IsNumber()
	public hit_rate: number;

	@IsObject()
	public subject: Subject;

}