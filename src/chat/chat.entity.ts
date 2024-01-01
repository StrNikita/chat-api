import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user.entity';

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
}
