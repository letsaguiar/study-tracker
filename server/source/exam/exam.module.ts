import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exam } from './exam.dto.out';
import { ExamService } from './exam.service';
import { ExamController } from './exam.controller';

@Module({
	imports: [
		TypeOrmModule.forFeature([ Exam ]),
	],
	providers: [
		ExamService,
	],
	controllers: [
		ExamController,
	],
})
export class ExamModule { }
