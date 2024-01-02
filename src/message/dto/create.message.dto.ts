import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, MaxLength, MinLength } from 'class-validator';

export class CreateMessageDto {
  @ApiProperty()
  @IsString()
  @IsUUID(4)
  public senderId: string;

  @ApiProperty()
  @IsString()
  @MinLength(1)
  @MaxLength(1000)
  public message: string;

  @ApiProperty()
  @IsString()
  @IsUUID(4)
  public chatId: string;
}
