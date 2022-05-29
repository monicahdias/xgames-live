import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
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
  @Patch(':id')
  @ApiOperation({
    summary: 'Update a profile by ID',
  })
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profileService.update(id, updateProfileDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Delete a profile by ID',
  })
  delete(@Param('id') id: string) {
    this.profileService.delete(id);
  }

}
