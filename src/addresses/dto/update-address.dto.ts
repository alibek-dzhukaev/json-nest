import { PartialType } from '@nestjs/mapped-types';
import { CreateAddressDto } from './create-address.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAddressDto extends PartialType(CreateAddressDto) {
  @ApiProperty()
  readonly street: string;

  @ApiProperty()
  readonly suite: string;

  @ApiProperty()
  readonly city: string;

  @ApiProperty()
  readonly zipcode: string;
}
