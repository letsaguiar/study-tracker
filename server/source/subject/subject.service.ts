import { BadRequestException, Injectable } from '@nestjs/common';
import { Subject } from './subject.dto.out';
import { SubjectCreateDto, SubjectUpdateDto } from './subject.dto.in';

@Injectable()
export class SubjectService
{
	private db: Subject[] = [];

	public create(params: SubjectCreateDto): Subject
	{
		const subject = new Subject();
		subject.id = crypto.randomUUID();
		subject.name = params.name;
		subject.created_at = new Date();
		subject.updated_at = new Date();

		this.db.push(subject);

		return subject;
	}

	public update(id: string, params: SubjectUpdateDto): Subject
	{
		const subject = this.db.find((_subject) =>  _subject.id === id);

		if (!subject)
			throw new BadRequestException('The requested id does not exists');

		subject.name = params.name;
		return subject;
	}

	public getOne(id: string): Subject
	{
		return this.db.find((_subject) => _subject.id === id);
	}

	public getMany(): Subject[]
	{
		return this.db;
	}

	public delete(id: string): void
	{
		const subject = this.db.find((_subject) => _subject.id === id);

		if (!subject)
			throw new BadRequestException('The requested id does not exists');

		this.db = this.db.filter((_subject) => _subject.id !== id);
	}
}
