import { PartialType, PickType } from '@nestjs/swagger';
import { StudySession } from './study-session.dto.out';

export class StudySessionIdDto extends PickType(StudySession, ['id'] as const) { }

export class StudySessionCreateDto extends PickType(StudySession, [ 'subject' ] as const) { }

export class StudySessionUpdateDto extends PartialType(PickType(StudySession, [ 'subject', 'init', 'end' ] as const)) { }

