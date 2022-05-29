import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUrl, IsUUID } from "class-validator";

export class CreateProfileDto {
  @IsUUID()
  @ApiProperty({
    description: "The profile's ID",
    example: "08cd5730-9aee-43ff-beab-43524d370265",
  })
  userId: string;

  @IsString()
  @ApiProperty({
    description: "The profile's title",
    example: "Monica Dias",
  })
  title: string;

  @IsUrl()
  @ApiProperty({
    description: "The profile's image URL",
    example: "https://avatars.githubusercontent.com/u/97922536",
  })
  imageUrl: string;

  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: "The profile's games IDs",
    example: '["01b48c82-e6c7-4471-84a6-353578379d14", "24cb1fe5-47c1-4fa3-ac90-677b31ce9d88", "c73ecfcd-38ae-4de1-8ebe-4f231d6d13bd"]',
  })
    games: string[];
}
