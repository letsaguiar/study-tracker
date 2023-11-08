import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudySession } from './study-session/study-session.dto.out';
import { StudySessionModule } from './study-session/study-session.module';
import { Subject } from './subject/subject.dto.out';
import { SubjectModule } from './subject/subject.module';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: process.env.POSTGRES_HOST,
			port: parseInt(process.env.POSTGRES_PORT),
			username: process.env.POSTGRES_USERNAME,
			password: process.env.POSTGRES_PASSWORD,
			database: process.env.POSTGRES_DATABASE,
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
