import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

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
    summary: 'Find a profile by id',
  })
  findOne(@Param('id') id: string) {
    return this.profileService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update a profile by id',
  })
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profileService.update(id, updateProfileDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a profile by id',
  })
  delete(@Param('id') id: string) {
    return this.profileService.delete(id);
  }
}
