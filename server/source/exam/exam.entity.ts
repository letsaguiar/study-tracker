import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { PracticeExam } from '../practice-exam/practice-exam.entity';

@Entity()
export class Exam
{

	@PrimaryGeneratedColumn('uuid')
	public id: string;

	@Column()
	public name: string;

	@Column({ nullable: true })
	public first_application_date?: Date;

	@Column({ nullable: true })
	public second_application_date?: Date;

	@CreateDateColumn()
	public created_at: Date;

	@UpdateDateColumn()
	public updated_at: Date;

	@OneToMany(() => PracticeExam, (practice_exam) => practice_exam.exam)
	public practice_exams: PracticeExam[];

}

