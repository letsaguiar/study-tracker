import { Module } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { SubjectController } from './subject.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from './subject.dto.out';

@Module({
	imports: [
		TypeOrmModule.forFeature([ Subject ])
	],
	providers: [
		SubjectService,
	],
	controllers: [
		SubjectController,
	],
})
export class SubjectModule { }
