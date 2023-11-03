import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { SubjectCreateDto, SubjectIdDto, SubjectUpdateDto } from './subject.dto.in';
import { Subject } from './subject.dto.out';

@Controller('subject')
export class SubjectController
{

	public constructor(
		private readonly subjectService: SubjectService
	) { }

	@Post('')
	public create(@Body() body: SubjectCreateDto): Subject
	{
		return this.subjectService.create(body);
	}

	@Patch(':id')
	public update(@Param() params: SubjectIdDto, @Body() body: SubjectUpdateDto): Subject
	{
		return this.subjectService.update(params.id, body);
	}

	@Get('')
	public getMany(): Subject[]
	{
		return this.subjectService.getMany();
	}

	@Get(':id')
	public getOne(@Param() params: SubjectIdDto): Subject
	{
		return this.subjectService.getOne(params.id);
	}

	@Delete(':id')
	@HttpCode(HttpStatus.NO_CONTENT)
	public delete(@Param() params: SubjectIdDto): void
	{
		return this.subjectService.delete(params.id);
	}
}
