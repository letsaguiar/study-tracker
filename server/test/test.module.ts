import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exam } from '../source/exam/exam.dto.out';
import { ExamModule } from '../source/exam/exam.module';
import { PracticeTest } from '../source/practice-test/practice-test.dto.out';
import { PracticeTestModule } from '../source/practice-test/practice-test.module';
import { StudySession } from '../source/study-session/study-session.dto.out';
import { StudySessionModule } from '../source/study-session/study-session.module';
import { SubjectModule } from '../source/subject/subject.module';
import { Subject } from '../source/subject/subject.dto.out';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'sqlite',
			database: 'database/study-tracker-test.db',
			entities: [
				Subject,
				StudySession,
				PracticeTest,
				Exam,
			],
			synchronize: true,
		}),
		SubjectModule,
		StudySessionModule,
		PracticeTestModule,
		ExamModule,
	]
})
export class TestModule { }
