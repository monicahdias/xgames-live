import { Injectable } from '@nestjs/common';
import { LoginResponseDto } from './dto/dto-response.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  async login(loginDto: LoginDto): Promise<LoginResponseDto> {
    return {
      token: 'TOKEN_GENERATED_AUTHOMATICALLY',
      user: undefined,
    };
  }
}
