import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateProfileDto } from './dto/create-profile.dto';
import { ProfileService } from './profile.service';

@ApiTags('profile')
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  @ApiOperation({
    summary: 'Find all profiles',
  })
  findAll() {
    return this.profileService.findAll();
  }

  @Post()
  @ApiOperation({
    summary: 'Create a new profile',
  })
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.profileService.create(createProfileDto);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Find a profile by ID',
  })
  findOne(@Param('id') id: string) {
    return this.profileService.findOne(id);
  }


}
