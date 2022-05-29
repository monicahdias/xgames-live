import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {

  constructor(private readonly prisma: PrismaService) {}

  create(createProfileDto: CreateProfileDto) {
    const data: Prisma.ProfileCreateInput = {
      user: {
        connect: {
          id: createProfileDto.userId,
        },
      },
      title: createProfileDto.title,
      imageUrl: createProfileDto.imageUrl,

    }
    return this.prisma.profile.create({data}).catch(handleError)

  }

  findAll() {
    return `Find all profiles`;
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
