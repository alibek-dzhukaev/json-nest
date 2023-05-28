import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';
import { UsersService } from '../users/users.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
    private usersService: UsersService,
  ) {}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    try {
      const user = await this.usersService.findOne(createPostDto.userId);
      const post = this.postRepository.create({ ...createPostDto, user });
      await this.postRepository.save(post);
      return post;
    } catch (e) {
      throw e;
    }
  }

  async findAll(): Promise<Post[]> {
    return this.postRepository.find({
      relations: ['user'],
    });
  }

  async findOne(id: number): Promise<Post> {
    return this.postRepository.findOne(id, {
      relations: ['user'],
    });
  }

  async update(id: number, updatePostDto: UpdatePostDto): Promise<Post> {
    await this.postRepository.update(id, updatePostDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.postRepository.delete(id);
  }
}
