import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from './entities/auth.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth) private authRepository: Repository<Auth>,
    private jwtService: JwtService,
  ) {}

  async login(createAuthDto: CreateAuthDto) {
    try {
    } catch (e) {
      throw e;
    }
  }

  async registration(createAuthDto: CreateAuthDto) {
    try {
      const candidate = this.findByEmail(createAuthDto.email);
      if (candidate) {
        throw new BadRequestException('Email already in use');
      }
      const hashPassword = await argon2.hash(createAuthDto.password);
      const user = await this.authRepository.create({
        ...createAuthDto,
        password: hashPassword,
      });
      await this.authRepository.save(user);
      return this.generateToken(user);
    } catch (e) {
      throw e;
    }
  }

  async findByEmail(email: string) {
    return this.authRepository.find({
      where: { email },
    });
  }

  generateToken(user: Auth) {
    const payload = { email: user.email, id: user.id, username: user.username };
    return { token: this.jwtService.sign(payload) };
  }
}
