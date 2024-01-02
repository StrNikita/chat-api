import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Chat } from './chat.entity';
import { Repository } from 'typeorm';
import { CreateChatDto } from './dto/create.chat.dto';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chat)
    private readonly chatRepository: Repository<Chat>,
  ) {}

  public async get() {
    return this.chatRepository.find();
  }

  public async create(dto: CreateChatDto) {
    const chat = this.chatRepository.create(dto);
    return this.chatRepository.save(chat);
  }
}
