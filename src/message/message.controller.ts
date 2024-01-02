import {
  Body,
  Controller,
  Delete,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateMessageDto } from './dto/create.message.dto';
import { UpdateMessageDto } from './dto/update.message.dto';
import { MessageService } from './message.service';

@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  public async create(@Body() dto: CreateMessageDto) {
    return this.messageService.create(dto);
  }

  @Patch('/:id')
  public async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateMessageDto,
  ) {
    return this.messageService.update(id, dto);
  }

  @Delete('/:id')
  public async delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.messageService.delete(id);
  }
}
