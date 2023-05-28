import { ApiProperty } from '@nestjs/swagger';

export class CreateAddressDto {
  @ApiProperty()
  readonly street: string;

  @ApiProperty()
  readonly suite: string;

  @ApiProperty()
  readonly city: string;

  @ApiProperty()
  readonly zipcode: string;
}
