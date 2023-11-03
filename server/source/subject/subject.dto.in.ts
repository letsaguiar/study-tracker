import { PartialType, PickType } from '@nestjs/swagger';
import { Subject } from './subject.dto.out';

export class SubjectIdDto extends PickType(Subject, ['id'] as const) { }

export class SubjectCreateDto extends PickType(Subject, ['name'] as const) { }

export class SubjectUpdateDto extends PartialType(SubjectCreateDto) { }

