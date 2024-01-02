import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user.entity';
import { Chat } from '../chat/chat.entity';

@Entity('messages')
export class Message {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ length: 1000 })
  public message: string;

  @Column()
  public senderId: string;

  @ManyToOne(() => User, { nullable: false })
  public sender: User;

  @Column()
  public chatId: string;

  @ManyToOne(() => Chat, { nullable: false })
  public chat: Chat;
}
