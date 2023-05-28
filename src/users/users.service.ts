import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CompaniesService } from '../companies/companies.service';
import { AddressesService } from '../addresses/addresses.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private companiesService: CompaniesService,
    private addressesService: AddressesService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const address = await this.addressesService.create(createUserDto.address);
      const company = await this.companiesService.create(createUserDto.company);
      const user = this.usersRepository.create({
        ...createUserDto,
        address,
        company,
      });
      await this.usersRepository.save(user);
      return user;
    } catch (e) {
      throw e;
    }
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find({
      relations: ['address', 'company'],
    });
  }

  async findOne(id: number): Promise<User> {
    return this.usersRepository.findOne(id, {
      relations: ['address', 'company'],
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    await this.usersRepository.update(id, updateUserDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
