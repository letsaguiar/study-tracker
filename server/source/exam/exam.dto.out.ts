import { IsISO8601, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Exam 
{

	@PrimaryGeneratedColumn('uuid')
	@IsUUID()
	public id: string;

	@Column()
	@IsString()
	@IsNotEmpty()
	public name: string;

	@Column({ nullable: true })
	@IsISO8601()
	@IsOptional()
	public first_application_date?: string;

	@Column({ nullable: true })
	@IsISO8601()
	@IsOptional()
	public second_application_date?: string;

	@CreateDateColumn()
	@IsISO8601()
	public created_at: string;

	@UpdateDateColumn()
	@IsISO8601()
	public updated_at: string;

}
