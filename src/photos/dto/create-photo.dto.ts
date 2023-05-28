import { ApiProperty } from '@nestjs/swagger';

export class CreatePhotoDto {
  @ApiProperty()
  readonly albumId: number;

  @ApiProperty()
  readonly title: string;

  @ApiProperty()
  readonly url: string;

  @ApiProperty()
  readonly thumbnailUrl: string;
}
