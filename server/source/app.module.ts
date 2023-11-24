import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exam } from './exam/exam.entity';
import { ExamModule } from './exam/exam.module';
import { PracticeExam } from './practice-exam/practice-exam.entity';
import { PracticeTest } from './practice-test/practice-test.dto.out';
import { PracticeTestModule } from './practice-test/practice-test.module';
import { StudySession } from './study-session/study-session.dto.out';
import { StudySessionModule } from './study-session/study-session.module';
import { Subject } from './subject/subject.dto.out';
import { SubjectModule } from './subject/subject.module';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'sqlite',
			database: 'database/study-tracker.db',
			entities: [
				Subject,
				StudySession,
				PracticeTest,
				Exam,
				PracticeExam,
			],
			synchronize: true,
		}),
		SubjectModule,
		StudySessionModule,
		PracticeTestModule,
		ExamModule,
	]
})
export class AppModule { }
