import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../user/user.entity';
import { Message } from '../message/message.entity';

@Entity('chats')
export class Chat {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  initiatorId: string;

  @ManyToOne(() => User, { nullable: false })
  initiator: string;

  @Column()
  participantId: string;

  @ManyToOne(() => User, { nullable: false })
  participant: string;

  @OneToMany(() => Message, (message) => message.chat)
  messages: Message[];
}
