import { Type } from 'class-transformer';
import { IsDate, IsISO8601, IsNotEmptyObject, IsNumber, IsObject, IsUUID, ValidateNested } from 'class-validator';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { SubjectIdDto } from '../subject/subject.dto.in';
import { Subject } from '../subject/subject.dto.out';

@Entity()
export class StudySession
{
	@PrimaryGeneratedColumn('uuid')
	@IsUUID()
	public id: string;

	@Column({ nullable: true })
	@IsDate()
	@Type(() => Date)
	public init?: Date;

	@Column({ nullable: true })
	@IsDate()
	@Type(() => Date)
	public end?: Date;
    
	@ManyToOne(() => Subject, (subject) => subject.study_sessions, { onDelete: 'CASCADE' })
	@IsObject()
	@IsNotEmptyObject()
	@ValidateNested()
	@Type(() => SubjectIdDto)
	public subject: Subject;
    
	@CreateDateColumn()
	@IsDate()
	public created_at: Date;
	
	@UpdateDateColumn()
	@IsDate()
	public updated_at: Date;
}

export class StudySessionSumary
{

	@IsNumber()
	public total: number;

	@IsObject()
	@IsNotEmptyObject()
	@ValidateNested()
	@Type(() => StudySessionSummaryBySubject)
	public by_subject: StudySessionSummaryBySubject[];

}

export class StudySessionSummaryBySubject
{
	@IsObject()
	@IsNotEmptyObject()
	@ValidateNested()
	@Type(() => Subject)
	public subject: Subject;

	@IsNumber()
	public total: number;
}