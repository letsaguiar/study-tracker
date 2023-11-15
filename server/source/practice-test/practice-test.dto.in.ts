import { PartialType, PickType } from '@nestjs/swagger';
import { PracticeTest } from './practice-test.dto.out';

export class PracticeTestIdDto extends PickType(PracticeTest, ['id'] as const) { }

export class PracticeTestCreateDto extends PickType(PracticeTest, ['subject' ,'number_of_questions', 'number_of_hits', 'date'] as const) { }

export class PracticeTestUpdateDto extends PartialType(PracticeTestCreateDto) { }