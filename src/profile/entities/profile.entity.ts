import { Game } from 'src/game/entities/game.entity';
import { User } from 'src/user/entities/user.entity';

export class Profile {
  id?: string;
  title: string;
  imageUrl: string;
  user?: User;
  createdAt?: Date;
  updatedAt?: Date;
  games?: Game[];
}
