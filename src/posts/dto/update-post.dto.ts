import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  @ApiProperty()
  readonly userId: number;

  @ApiProperty()
  readonly title: string;

  @ApiProperty()
  readonly completed: boolean;
}
