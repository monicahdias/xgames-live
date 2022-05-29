import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {

  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return `Find all profiles`;
  }

  create(createProfileDto: CreateProfileDto) {
    const data: Prisma.ProfileCreateInput = {
      user: {
        connect: {
          id: createProfileDto.userId,
        },
      },
      title: createProfileDto.title,
      imageUrl: createProfileDto.imageUrl,
      games: {
        connect: createProfileDto.games.map(gameId => ({
              id: gameId,
            })),
      }
    }
    return this.prisma.profile.create({
      data,
      select: {
        id: true,
        title: true,
        imageUrl: true,
        user: {
          select: {
            name: true,
          }
        },
        games: {
          select: {
            title: true,
          }
        },
      },
    }).catch(handleError)

  }

  findOne(id: string) {
    return `Find a profile by ID`;
  }

  update(id: string, updateProfileDto: UpdateProfileDto) {
    throw new Error('Method not implemented.');
  }

  delete(id: string) {
    throw new Error('Method not implemented.');
  }
}
