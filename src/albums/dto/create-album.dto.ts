import { ApiProperty } from '@nestjs/swagger';

export class CreateAlbumDto {
  @ApiProperty()
  readonly userId: number;

  @ApiProperty()
  readonly title: string;
}
