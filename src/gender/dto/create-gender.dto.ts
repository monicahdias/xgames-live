import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateGenderDto {
  @IsString()
  @ApiProperty({
    description: "The gender's name",
    example: "Adventure",
  })
  name: string;
}
