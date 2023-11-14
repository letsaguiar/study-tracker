import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudySession } from './study-session/study-session.dto.out';
import { StudySessionModule } from './study-session/study-session.module';
import { Subject } from './subject/subject.dto.out';
import { SubjectModule } from './subject/subject.module';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'sqlite',
			database: 'database.sqlite',
			entities: [
				Subject,
				StudySession,
			],
			synchronize: true,
		}),
		SubjectModule,
		StudySessionModule,
	]
})
export class AppModule { }
