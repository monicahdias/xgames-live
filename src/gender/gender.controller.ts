import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { GenderService } from './gender.service';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('gender')
@Controller('gender')
export class GenderController {
  constructor(private readonly genderService: GenderService) {}

    @Get()
    @ApiOperation({
      summary: 'Find all genders',
    })
    findAll() {
      return this.genderService.findAll();
    }

  @Post()
  @ApiOperation({
    summary: 'Create a new gender',
  })
  create(@Body() createGenderDto: CreateGenderDto) {
    return this.genderService.create(createGenderDto);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Find a gender by id',
  })
  findOne(@Param('id') id: string) {
    return this.genderService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update a gender by id',
  })
  update(@Param('id') id: string, @Body() updateGenderDto: UpdateGenderDto) {
    return this.genderService.update(id, updateGenderDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Delete a gender by id',
  })
  delete(@Param('id') id: string) {
    this.genderService.delete(id);
  }
}
