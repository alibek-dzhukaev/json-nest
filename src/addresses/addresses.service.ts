import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from './entities/address.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AddressesService {
  constructor(
    @InjectRepository(Address) private addressesRepository: Repository<Address>,
  ) {}

  async create(createAddressDto: CreateAddressDto): Promise<Address> {
    try {
      const address = this.addressesRepository.create(createAddressDto);
      await this.addressesRepository.save(address);
      return address;
    } catch (e) {
      throw e;
    }
  }

  async findOne(id: number): Promise<Address> {
    return this.addressesRepository.findOne(id);
  }

  async update(
    id: number,
    updateAddressDto: UpdateAddressDto,
  ): Promise<Address> {
    await this.addressesRepository.update(id, updateAddressDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.addressesRepository.delete(id);
  }
}
