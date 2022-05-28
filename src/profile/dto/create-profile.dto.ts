import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsUrl, IsUUID } from "class-validator"

export class CreateProfileDto {

  @IsString()
  @ApiProperty({
    description: "The profile's name",
    example: "Judite Maria",
  })
  title: string

  @IsUrl()
  @ApiProperty({
    description: "The profile's image url",
    example: "https://scontent.fsjk2-1.fna.fbcdn.net/v/t1.6435-9/119363113_3409497179073587_1511008169493166813_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=ZFAlsUojFRsAX8nfUmR&_nc_oc=AQlJA7VZMhrMufDfbirrw86KeUmxyXLqyr80saVMQKQq4XySvEZAn_LP7lZ__momM67UgnUYh18ZjqxslE5H0Ovo&_nc_ht=scontent.fsjk2-1.fna&oh=00_AT_xr98loyR1PbuDQDFPppfyW41IuYAZSkB-FhNxk1cjSg&oe=62B66DEB",
  })
  imageUrl: string

  @IsUUID()
  @ApiProperty({
    description: "The profile's  user ID",
    example: "6fc84747-9a52-4066-81c4-73f966e11b81"
  })
  userId: string

  @IsUUID(undefined, {each: true})
  @ApiProperty({
    description: "The profile's games list",
    example: ["6fc84747-9a52-6666-81c4-73f966e11b81", "6fc84747-9a52-5555-81c4-73f966e11b81"]
  })
  games?: string[]

}




