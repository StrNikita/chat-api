import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Chat } from '../chat/chat.entity';
import { Message } from '../message/message.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  public firstName: string;

  @Column()
  public lastName: string;

  @Column({ default: true })
  public isActive: boolean;

  @Column({ default: false })
  public isOnline: boolean;

  @OneToMany(() => Chat, (chat) => chat.initiator)
  chats: Chat[];

  @OneToMany(() => Chat, (chat) => chat.participant)
  participant: Chat[];

  @OneToMany(() => Message, (chat) => chat.sender)
  messages: Message[];
}
