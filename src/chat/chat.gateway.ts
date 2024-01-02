import { Logger } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { MessageService } from '../message/message.service';
import { GetChatMessages } from './dto/get.chat.messages.dto';
import { CreateMessageDto } from '../message/dto/create.message.dto';

@WebSocketGateway({ namespace: 'chat' })
export class ChatGateway {
  @WebSocketServer()
  server: Server;
  constructor(private readonly messageService: MessageService) {}

  async handleConnection(client: Socket) {
    Logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    Logger.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('new_message')
  public async newMessage(
    @MessageBody() dto: CreateMessageDto,
    @ConnectedSocket() client: Socket,
  ): Promise<void> {
    await this.messageService.create(dto);
    client.emit('message_sent', true);
  }

  @SubscribeMessage('get_messages')
  public async getChatMessages(
    @MessageBody() { chatId }: GetChatMessages,
    @ConnectedSocket() client: Socket,
  ): Promise<void> {
    const messages = await this.messageService.getByChat(chatId);
    client.emit('chat_messages', messages);
  }
}
