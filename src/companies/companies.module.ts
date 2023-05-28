import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { User } from '../users/entities/user.entity';

@Module({
  providers: [CompaniesService],
  imports: [TypeOrmModule.forFeature([Company, User])],
  exports: [CompaniesService],
})
export class CompaniesModule {}
