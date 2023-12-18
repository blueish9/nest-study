import { IsHash, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignInDto {
  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsHash('sha256')
  password: string;
}
