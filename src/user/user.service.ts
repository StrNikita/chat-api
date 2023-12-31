import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public async getAll() {
    return this.userRepository.find();
  }

  public async getOne(id: string) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  public async create(dto: CreateUserDto) {
    const user = this.userRepository.create({ ...dto });
    return this.userRepository.save(user);
  }

  public async update(id: string, dto: UpdateUserDto) {
    await this.getOne(id);
    await this.userRepository.update(id, dto);
  }

  public async delete(id: string) {
    await this.userRepository.delete(id);
  }
}
