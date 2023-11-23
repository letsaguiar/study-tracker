import { Type } from 'class-transformer';
import { IsDate, IsISO8601, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
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
	@IsDate()
	@Type(() => Date)
	@IsOptional()
	public first_application_date?: Date;

	@Column({ nullable: true })
	@IsDate()
	@Type(() => Date)
	@IsOptional()
	public second_application_date?: Date;

	@CreateDateColumn()
	@IsDate()
	@Type(() => Date)
	public created_at: Date;

	@UpdateDateColumn()
	@IsDate()
	@Type(() => Date)
	public updated_at: Date;

}
