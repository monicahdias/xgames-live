import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsPositive } from "class-validator";

export class CreateGameDto {
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: "The name of the game",
    example: "The Legend of Zelda: Breath of the Wild",
  })
  title: string;


  converImageUrl: string;
  description: string;
  year: number;
  imbdScore: number;
  trailerYouTubeUrl: string;
  gameplayYouTubeUrl: string;
}
