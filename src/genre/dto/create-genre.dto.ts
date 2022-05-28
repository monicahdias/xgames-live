import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateGenreDto {
  @IsString()
  @ApiProperty({
    description: "The genre's name",
    example: "Adventure",
  })
  name: string;
}
