import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';

export class LoginResponseDto {
  @ApiProperty({
    description: 'JWT generated by login',
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imp1ZGl0ZW1hcmlhQGdtYWlsLmNvbSIsImlhdCI6MTY1Mzk2MzMwMywiZXhwIjoxNjU0MDQ5NzAzfQ.AlrucYaT-uNPgAlm_-eJlA4aXyWytdtuzR8a6p1Ki0U',
  })
  token: string;

  @ApiProperty({
    description: "User's data authenticated",
  })
  user: User;
}
