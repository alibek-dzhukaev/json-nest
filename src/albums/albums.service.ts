import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Album } from './entities/album.entity';
import { Repository } from 'typeorm';
import { UsersService } from '../users/users.service';

@Injectable()
export class AlbumsService {
  constructor(
    @InjectRepository(Album)
    private albumRepository: Repository<Album>,
    private userService: UsersService,
  ) {}

  async create(createAlbumDto: CreateAlbumDto): Promise<Album> {
    try {
      const user = await this.userService.findOne(createAlbumDto.userId);
      const album = this.albumRepository.create({ ...createAlbumDto, user });
      await this.albumRepository.save(album);
      return album;
    } catch (e) {
      throw e;
    }
  }

  findAll(): Promise<Album[]> {
    return this.albumRepository.find({
      relations: ['user'],
    });
  }

  findOne(id: number): Promise<Album> {
    return this.albumRepository.findOne(id, {
      relations: ['user'],
    });
  }

  async update(id: number, updateAlbumDto: UpdateAlbumDto): Promise<Album> {
    await this.albumRepository.update(id, updateAlbumDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.albumRepository.delete(id);
  }
}
