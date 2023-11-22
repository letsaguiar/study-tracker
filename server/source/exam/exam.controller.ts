import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ExamService } from './exam.service';
import { ExamCreateDto, ExamIdDto, ExamUpdateDto } from './exam.dto.in';
import { Exam } from './exam.dto.out';

@Controller('exam')
export class ExamController
{

	public constructor(
		private readonly examService: ExamService,
	) { }

	@Post('')
	public create(@Body() body: ExamCreateDto): Promise<Exam>
	{
		return (this.examService.create(body));
	}

	@Patch(':id')
	@HttpCode(HttpStatus.NO_CONTENT)
	public update(@Param() params: ExamIdDto, @Body() body: ExamUpdateDto): Promise<void>
	{
		return (this.examService.update(params.id, body));
	}

	@Get(':id')
	public getOne(@Param() params: ExamIdDto): Promise<Exam>
	{
		return (this.examService.getOne(params.id));
	}

	@Get('')
	public getMany(): Promise<Exam[]>
	{
		return (this.examService.getMany());
	}

	@Delete(':id')
	@HttpCode(HttpStatus.NO_CONTENT)
	public delete(@Param() params: ExamIdDto): Promise<void>
	{
		return (this.examService.delete(params.id));
	}

}
