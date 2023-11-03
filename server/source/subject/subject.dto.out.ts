import { IsISO8601, IsString, IsUUID } from 'class-validator';

export class Subject
{

	@IsUUID()
	public id: string;

	@IsString()
	public name: string;

	@IsISO8601()
	public created_at: Date;

	@IsISO8601()
	public updated_at: Date;

}
