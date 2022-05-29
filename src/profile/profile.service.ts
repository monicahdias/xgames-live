import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  create(createProfileDto: CreateProfileDto) {
    return 'Create a new profile';
  }

  findAll() {
    return `Find all profiles`;
  }

  findOne(id: string) {
    return `Find a profile by ID`;
  }

}
