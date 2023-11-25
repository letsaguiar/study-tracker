import { PartialType, PickType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmptyObject, IsObject, ValidateNested } from 'class-validator';
import { SubjectDto } from './subject.dto.out';

export class SubjectIdDto extends PickType(SubjectDto, ['id']) { }

export class SubjectCreateDto extends PickType(SubjectDto, [ 'name' ]) 
{

	@IsObject()
	@IsNotEmptyObject()
	@ValidateNested()
	@Type(() => SubjectIdDto)
	public parent: SubjectIdDto;

}

export class SubjectUpdateDto extends PartialType(SubjectCreateDto) { }

