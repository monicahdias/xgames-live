import { IsNumber, IsPositive } from "class-validator";

export class CreateGameDto {
  @IsNumber()
  @IsPositive()
  title: string;
  converImageUrl: string;
  description: string;
  year: number;
  imbdScore: number;
  trailerYouTubeUrl: string;
  gameplayYouTubeUrl: string;
}
