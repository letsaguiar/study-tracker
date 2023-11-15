import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PracticeTestController } from './practice-test.controller';
import { PracticeTest } from './practice-test.dto.out';
import { PracticeTestService } from './practice-test.service';

@Module({
	imports: [ 
		TypeOrmModule.forFeature([PracticeTest]),
	],
	controllers: [
		PracticeTestController,
	],
	providers: [
		PracticeTestService,
	],
})
export class PracticeTestModule { }