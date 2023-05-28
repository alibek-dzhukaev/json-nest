import { Module } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { AlbumsController } from './albums.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { User } from '../users/entities/user.entity';
import { Album } from './entities/album.entity';
import { Photo } from '../photos/entities/photo.entity';

@Module({
  controllers: [AlbumsController],
  providers: [AlbumsService],
  imports: [TypeOrmModule.forFeature([Album, User, Photo]), UsersModule],
  exports: [AlbumsService],
})
export class AlbumsModule {}
