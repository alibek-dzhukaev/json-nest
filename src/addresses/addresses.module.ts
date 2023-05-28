import { Module } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './entities/address.entity';
import { User } from '../users/entities/user.entity';

@Module({
  providers: [AddressesService],
  imports: [TypeOrmModule.forFeature([Address, User])],
  exports: [AddressesService],
})
export class AddressesModule {}
