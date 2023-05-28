import { Injectable } from '@nestjs/common';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { Photo } from './entities/photo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AlbumsService } from '../albums/albums.service';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(Photo) private photoRepository: Repository<Photo>,
    private albumService: AlbumsService,
  ) {}
  async create(createPhotoDto: CreatePhotoDto): Promise<Photo> {
    try {
      const album = await this.albumService.findOne(createPhotoDto.albumId);
      const photo = this.photoRepository.create({ ...createPhotoDto, album });
      await this.photoRepository.save(photo);
      return photo;
    } catch (e) {}
  }

  findAll(): Promise<Photo[]> {
    return this.photoRepository.find({
      relations: ['album', 'photo'],
    });
  }

  findOne(id: number): Promise<Photo> {
    return this.photoRepository.findOne(id, {
      relations: ['album', 'photo'],
    });
  }

  async update(id: number, updatePhotoDto: UpdatePhotoDto): Promise<Photo> {
    await this.photoRepository.update(id, updatePhotoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.photoRepository.delete(id);
  }
}
