import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CommentsModule } from './comments/comments.module';
import { AlbumsModule } from './albums/albums.module';
import { PhotosModule } from './photos/photos.module';
import { TodosModule } from './todos/todos.module';
import { UsersModule } from './users/users.module';
import { CompaniesModule } from './companies/companies.module';
import { AddressesModule } from './addresses/addresses.module';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { __prod__, getEnvPath } from './utils/helpers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './companies/entities/company.entity';
import { Photo } from './photos/entities/photo.entity';
import { Todo } from './todos/entities/todo.entity';
import { Post } from './posts/entities/post.entity';
import { User } from './users/entities/user.entity';
import { Album } from './albums/entities/album.entity';
import { Address } from './addresses/entities/address.entity';
import { Comment } from './comments/entities/comment.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: getEnvPath,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [User, Todo, Post, Photo, Company, Comment, Album, Address],
      synchronize: !__prod__,
      autoLoadEntities: !__prod__,
    }),
    PostsModule,
    CommentsModule,
    AlbumsModule,
    PhotosModule,
    TodosModule,
    UsersModule,
    CompaniesModule,
    AddressesModule,
    AuthModule,
  ],
})
export class AppModule {}
