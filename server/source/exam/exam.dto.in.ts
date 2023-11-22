import { OmitType, PartialType, PickType } from '@nestjs/swagger';
import { Exam } from './exam.dto.out';

export class ExamIdDto extends PickType(Exam, ['id']) { }

export class ExamCreateDto extends OmitType(Exam, ['id', 'created_at', 'updated_at']) { }

export class ExamUpdateDto extends PartialType (ExamCreateDto) { }
