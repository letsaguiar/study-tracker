import { Type } from 'class-transformer';
import { IsDate, IsString, IsUUID, ValidateNested } from 'class-validator';
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { PracticeTest } from '../practice-test/practice-test.dto.out';
import { StudySession } from '../study-session/study-session.dto.out';
import { SubjectIdDto } from './subject.dto.in';


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

	@ManyToOne(() => Subject, { nullable: true })
	@ValidateNested()
	@Type(() => SubjectIdDto)
	public parent?: Subject;

	@OneToMany(() => StudySession, (study_session) => study_session.subject)
	@ValidateNested({ each: true })
	@Type(() => StudySession)
	public study_sessions: StudySession[];

	@OneToMany(() => PracticeTest, (practice_test) => practice_test.subject)
	@ValidateNested({ each: true })
	@Type(() => PracticeTest)
	public practice_tests: PracticeTest[];
	
}
