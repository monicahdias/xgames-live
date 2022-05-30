import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString, IsUrl } from 'class-validator';

export class CreateGameDto {
  @IsString()
  @ApiProperty({
    description: "The game's title",
    example: 'Valheim',
  })
  title: string;

  @IsString()
  @ApiProperty({
    description: "The game's cover image url",
    example:
      'https://cdn.akamai.steamstatic.com/steamcommunity/public/images/clans/33695701/fa6ca8ee4d8f7a6cfd31a952b9b977eb370eee63.png',
  })
  coverimageurl: string;

  @IsString()
  @ApiProperty({
    description: "The game's description",
    example:
      'Valheim is an open-world survival game played from a third-person perspective. As fallen Vikings, players must craft tools, build shelters and fight enemies to survive. The game uses distinctive low-resolution stylized 3D graphics, with a combat system inspired by action games. Co-operative gameplay with up to ten people and optional PvP gameplay is also supported.',
  })
  description: string;

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: "The game's year release",
    example: '2021',
  })
  year: number;

  @IsNumber({
    maxDecimalPlaces: 1,
  })
  @IsPositive()
  @ApiProperty({
    description: "The game's IMDB Score",
    example: 5.0,
  })
  imdbscore: number;

  @IsUrl()
  @ApiProperty({
    description: "YouTube's trailer URL",
    example: 'https://youtu.be/oNx-9YsOpBo',
  })
  traileryoutubeurl: string;

  @IsUrl()
  @ApiProperty({
    description: "YouTube's gameplay URL",
    example: 'https://youtu.be/oNx-9YsOpBo',
  })
  gameplayyoutubeurl: string;
}
