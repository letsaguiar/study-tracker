import { Type } from 'class-transformer';
import { IsDate, IsISO8601, IsNotEmptyObject, IsNumber, IsObject, IsUUID, ValidateNested } from 'class-validator';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { SubjectIdDto } from '../subject/subject.dto.in';
import { Subject } from '../subject/subject.dto.out';
import { OmitType, PickType } from '@nestjs/swagger';

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
	@IsDate()
	@Type(() => Date)
	public date: Date;

	@CreateDateColumn()
	@IsDate()
	@Type(() => Date)
	public created_at: Date;

	@UpdateDateColumn()
	@IsDate()
	@Type(() => Date)
	public updated_at: Date;

}

export class PracticeTestDto extends PracticeTest
{
	
	@IsNumber()
	public hit_rate: number;

}
