import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamModule } from './exam/exam.module';
import { PracticeExamModule } from './practice-exam/practice-exam.module';
import { PracticeTestModule } from './practice-test/practice-test.module';
import { StudySessionModule } from './study-session/study-session.module';
import { SubjectModule } from './subject/subject.module';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'sqlite',
			database: 'database/study-tracker.db',
			entities: [
				__dirname + '/**/*.entity.ts',
			],
			synchronize: true,
		}),
		SubjectModule,
		StudySessionModule,
		PracticeTestModule,
		ExamModule,
		PracticeExamModule,
	]
})
export class AppModule { }
