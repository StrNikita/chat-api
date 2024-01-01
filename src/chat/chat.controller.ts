import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateChatDto } from './dto/create.chat.dto';
import { ChatService } from './chat.service';

@Controller('chats')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get()
  public async get() {
    return this.chatService.get();
  }

  @Post()
  public async create(@Body() dto: CreateChatDto) {
    return this.chatService.create(dto);
  }
}
