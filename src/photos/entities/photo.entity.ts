import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Album } from '../../albums/entities/album.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'photo' })
export class Photo {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column()
  url: string;

  @ApiProperty()
  @Column()
  thumbnailUrl: string;

  @ManyToOne(() => Album, (album) => album.photos)
  album: Album;
}
