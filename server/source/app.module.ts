import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PracticeTest } from './practice-test/practice-test.dto.out';
import { StudySession } from './study-session/study-session.dto.out';
import { StudySessionModule } from './study-session/study-session.module';
import { Subject } from './subject/subject.dto.out';
import { SubjectModule } from './subject/subject.module';
import { PracticeTestModule } from './practice-test/practice-test.module';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'sqlite',
			database: 'database/study-tracker.db',
			entities: [
				Subject,
				StudySession,
				PracticeTest,
			],
			synchronize: true,
		}),
		SubjectModule,
		StudySessionModule,
		PracticeTestModule,
	]
})
export class AppModule { }
