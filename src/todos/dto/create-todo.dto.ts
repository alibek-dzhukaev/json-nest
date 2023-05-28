import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiProperty()
  readonly userId: number;

  @ApiProperty()
  readonly title: string;

  @ApiProperty()
  readonly completed: boolean;
}
