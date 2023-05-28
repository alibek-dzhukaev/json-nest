import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Todo } from '../todos/entities/todo.entity';
import { Post } from '../posts/entities/post.entity';
import { Album } from '../albums/entities/album.entity';
import { CompaniesModule } from '../companies/companies.module';
import { AddressesModule } from '../addresses/addresses.module';
import { Address } from '../addresses/entities/address.entity';
import { Company } from '../companies/entities/company.entity';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    TypeOrmModule.forFeature([User, Todo, Post, Album, Address, Company]),
    CompaniesModule,
    AddressesModule,
  ],
  exports: [UsersService],
})
export class UsersModule {}
