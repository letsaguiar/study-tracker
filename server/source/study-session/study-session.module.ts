import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudySession } from './study-session.dto.out';
import { StudySessionService } from './study-session.service';
import { StudySessionController } from './study-session.controller';

@Module({
	imports: [
		TypeOrmModule.forFeature([ StudySession ])
	],
	providers: [
		StudySessionService,
	],
	controllers: [
		StudySessionController,
	]
})
export class StudySessionModule { }