import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'address' })
export class Address {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  street: string;

  @ApiProperty()
  @Column()
  suite: string;

  @ApiProperty()
  @Column()
  city: string;

  @ApiProperty()
  @Column()
  zipcode: string;

  @OneToMany(() => User, (user) => user.address)
  users: User[];
}
