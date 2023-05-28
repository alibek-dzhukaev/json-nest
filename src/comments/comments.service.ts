import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostsService } from '../posts/posts.service';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentsRepository: Repository<Comment>,
    private postsService: PostsService,
  ) {}
  async create(createCommentDto: CreateCommentDto): Promise<Comment> {
    try {
      const post = await this.postsService.findOne(createCommentDto.postId);
      const comment = this.commentsRepository.create({
        ...createCommentDto,
        post,
      });
      await this.commentsRepository.save(comment);
      return comment;
    } catch (e) {
      throw e;
    }
  }

  findAll(): Promise<Comment[]> {
    return this.commentsRepository.find({
      relations: ['post'],
    });
  }

  findOne(id: number): Promise<Comment> {
    return this.commentsRepository.findOne(id, {
      relations: ['post'],
    });
  }

  async update(
    id: number,
    updateCommentDto: UpdateCommentDto,
  ): Promise<Comment> {
    await this.commentsRepository.update(id, updateCommentDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.commentsRepository.delete(id);
  }
}
