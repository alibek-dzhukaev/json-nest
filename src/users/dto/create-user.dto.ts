import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly username: string;

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  address: {
    readonly street: string;
    readonly suite: string;
    readonly city: string;
    readonly zipcode: string;
  };

  @ApiProperty()
  readonly phone: string;

  @ApiProperty()
  readonly website: string;

  @ApiProperty()
  company: {
    readonly name: string;
    readonly catchPhrase: string;
    readonly bs: string;
  };
}
