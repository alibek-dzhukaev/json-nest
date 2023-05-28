import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Todo } from '../../todos/entities/todo.entity';
import { Post } from '../../posts/entities/post.entity';
import { Album } from '../../albums/entities/album.entity';
import { Company } from '../../companies/entities/company.entity';
import { Address } from '../../addresses/entities/address.entity';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phone: string;

  @Column()
  website: string;

  @OneToMany(() => Todo, (todo) => todo.user)
  todos: Todo[];

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  @OneToMany(() => Album, (album) => album.user)
  albums: Album[];

  @ManyToOne(() => Company, (company) => company.users)
  company: Company;

  @ManyToOne(() => Address, (address) => address.users)
  address: Address;
}
