import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './message.entity';
import { Repository } from 'typeorm';
import { CreateMessageDto } from './dto/create.message.dto';
import { UpdateMessageDto } from './dto/update.message.dto';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}

  public getByUser(userId: string, chatId: string) {
    return this.messageRepository.find({ where: { senderId: userId, chatId } });
  }

  public getByChat(chatId: string) {
    return this.messageRepository.find({ where: { chatId } });
  }

  public async create(dto: CreateMessageDto) {
    const message = this.messageRepository.create(dto);
    return this.messageRepository.save(message);
  }

  public async update(id: string, dto: UpdateMessageDto) {
    const message = await this.messageRepository.findOne({ where: { id } });
    if (!message) {
      throw new NotFoundException();
    }

    await this.messageRepository.update(id, { message: dto.message });
  }

  public async delete(id: string) {
    await this.messageRepository.delete(id);
  }
}
