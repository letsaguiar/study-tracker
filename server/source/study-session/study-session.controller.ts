import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { StudySessionService } from './study-session.service';
import { StudySessionCreateDto, StudySessionIdDto, StudySessionUpdateDto } from './study-session.dto.in';
import { StudySession } from './study-session.dto.out';

@Controller('study-session')
export class StudySessionController
{
	public constructor(
		private readonly studySessionService: StudySessionService,
	) { }

	@Post('')
	public create(@Body() body: StudySessionCreateDto): Promise<StudySession>
	{
		return this.studySessionService.create(body);
	}

	@Patch(':id')
	@HttpCode(HttpStatus.NO_CONTENT)
	public update(@Param() params: StudySessionIdDto, @Body() body: StudySessionUpdateDto): Promise<void>
	{
		return this.studySessionService.update(params.id, body);
	}

	@Get('')
	public getMany(): Promise<StudySession[]>
	{
		return this.studySessionService.getMany();
	}

	@Get(':id')
	public getOne(@Param() params: StudySessionIdDto): Promise<StudySession>
	{
		return this.studySessionService.getOne(params.id);
	}

	@Delete(':id')
	@HttpCode(HttpStatus.NO_CONTENT)
	public delete(@Param() params: StudySessionIdDto): Promise<void>
	{
		return this.studySessionService.delete(params.id);
	}
}