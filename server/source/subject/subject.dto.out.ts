import { IsISO8601, IsString, IsUUID } from 'class-validator';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';


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
	@IsISO8601()
	public created_at: Date;

	@UpdateDateColumn()
	@IsISO8601()
	public updated_at: Date;

}
