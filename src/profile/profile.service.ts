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
    return this.prisma.profile
      .findMany({
        select: {
          id: true,
          title: true,
          games: {
            select: {
              title: true,
              coverimageurl: true,
              description: true,
              year: true,
              imdbscore: true,
            },
          },
          user: {
            select: {
              name: true,
              email: true,
            },
          },
        },
      })
      .catch(handleError);
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
        connect: createProfileDto.games.map((gameId) => ({
          id: gameId,
        })),
      },
    };
    return this.prisma.profile
      .create({
        data,
        select: {
          id: true,
          title: true,
          imageUrl: true,
          user: {
            select: {
              name: true,
            },
          },
          games: {
            select: {
              title: true,
              coverimageurl: true,
              description: true,
              year: true,
              imdbscore: true,
            },
          },
        },
      })
      .catch(handleError);
  }

  findOne(id: string) {
    return this.prisma.profile.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            name: true,
          },
        },
        games: {
          select: {
            title: true,
            coverimageurl: true,
            description: true,
            year: true,
            imdbscore: true,
          },
        },
      },
    });
  }

  update(id: string, updateProfileDto: UpdateProfileDto) {
    return this.prisma.profile
      .update({
        where: { id },
        data: {
          title: updateProfileDto.title,
          imageUrl: updateProfileDto.imageUrl,
          games: {
            connect: updateProfileDto.games.map((gameId) => ({
              id: gameId,
            })),
          },
        },
      })
      .catch(handleError);
  }

  delete(id: string) {
    this.prisma.profile.delete({ where: { id } }).catch(handleError);
  }
}
