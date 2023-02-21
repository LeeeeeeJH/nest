import { CatsService } from './cats.service';
import {
  Param,
  Controller,
  Delete,
  Get,
  HttpException,
  Patch,
  Post,
  Put,
  ParseIntPipe,
} from '@nestjs/common';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCats() {
    throw new HttpException('api is borken', 401);
    return 'all cat';
  }

  @Get(':id')
  getOneCate(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    console.log(typeof id);
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
