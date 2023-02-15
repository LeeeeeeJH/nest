import { CatsService } from './cats.service';
import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCats() {
    return 'all cat';
  }

  @Get(':id')
  getOneCate() {
    return 'one cat';
  }

  @Post(':id')
  createCats() {
    return 'create cat';
  }

  @Delete(':id')
  deleteCate() {
    return 'delete cat';
  }

  @Put(':id')
  updateCats() {
    return 'update cat';
  }

  @Patch(':id')
  updatePartialCats() {
    return 'update';
  }
}
