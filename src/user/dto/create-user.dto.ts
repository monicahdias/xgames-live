import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsString, Matches, MinLength } from "class-validator"

export class CreateUserDto {

  @IsString()
  @ApiProperty({
    description: "The user's name",
    example: "Judite Maria",
  })
  name: string

  @IsString()
  @ApiProperty({
    description: "The user's email",
    example: "juditemaria@gmail.com",
  })
  email: string

  @IsString()
  @MinLength(6)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password too weak',
  })
  @ApiProperty({
    description: "The user's password",
    example: "123456@Abcdef",
  })
  password: string

  @IsString()
  @ApiProperty({
    description: "The user's confirm password",
    example: "123456@Abcdef",
  })
  confirmpassword: string

  @IsString()
  @ApiProperty({
    description: "The user's cpf",
    example: "12345678901",
  })
  cpf: string

  @IsBoolean()
  @ApiProperty({
    description: "The user's isAdmin",
    example: true,
  })
  isAdmin: boolean
}
