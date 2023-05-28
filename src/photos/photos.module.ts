import { Module } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { PhotosController } from './photos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Album } from '../albums/entities/album.entity';
import { Photo } from './entities/photo.entity';
import { AlbumsModule } from '../albums/albums.module';

@Module({
  controllers: [PhotosController],
  providers: [PhotosService],
  imports: [TypeOrmModule.forFeature([Album, Photo]), AlbumsModule],
})
export class PhotosModule {}
