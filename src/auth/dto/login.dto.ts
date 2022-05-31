import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: "User's email",
    example: 'juditemaria@gmail.com',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: "User's password",
    example: '123456@Abcdef',
  })
  password: string;
}
