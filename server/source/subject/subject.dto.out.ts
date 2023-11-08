import { Type } from 'class-transformer';
import { IsDate, IsString, IsUUID, ValidateNested } from 'class-validator';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { StudySession } from '../study-session/study-session.dto.out';


@Entity()
export class Subject
{
	@PrimaryGeneratedColumn('uuid')
	@IsUUID()
	public id: string;

	@Column()
	@IsString()
	public name: string;

	@CreateDateColumn()
	@IsDate()
	public created_at: Date;

	@UpdateDateColumn()
	@IsDate()
	public updated_at: Date;

	@OneToMany(() => StudySession, (study_session) => study_session.subject)
	@ValidateNested({ each: true })
	@Type(() => StudySession)
	public study_sessions: StudySession[];
}
