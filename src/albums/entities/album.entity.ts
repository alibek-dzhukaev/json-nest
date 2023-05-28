import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Photo } from '../../photos/entities/photo.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'album' })
export class Album {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  title: string;

  @ManyToOne(() => User, (user) => user.albums)
  user: User;

  @OneToMany(() => Photo, (photo) => photo.album)
  photos: Photo[];
}
