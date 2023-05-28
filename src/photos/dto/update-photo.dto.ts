import { PartialType } from '@nestjs/mapped-types';
import { CreatePhotoDto } from './create-photo.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePhotoDto extends PartialType(CreatePhotoDto) {
  @ApiProperty()
  readonly albumId: number;

  @ApiProperty()
  readonly title: string;

  @ApiProperty()
  readonly url: string;

  @ApiProperty()
  readonly thumbnailUrl: string;
}
