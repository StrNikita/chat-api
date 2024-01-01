import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateChatDto {
  @ApiProperty()
  @IsUUID(4)
  @IsNotEmpty()
  initiatorId: string;

  @ApiProperty()
  @IsUUID(4)
  @IsNotEmpty()
  participantId: string;
}
