import { ReadOnlyCatDto } from './dto/cat.dto';
import { CatRequestDto } from './dto/cats.request.dto';
import { HttpExceptionFilter } from './../common/exceptions/http-exception.filter';
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
  Body,
} from '@nestjs/common';
import { SuccessInterceptor } from 'src/common/interceptions/success.interceptor';
import { UseFilters, UseInterceptors } from '@nestjs/common/decorators';
import { ApiOperation } from '@nestjs/swagger/dist';
import { ApiResponse } from '@nestjs/swagger/dist/decorators/api-response.decorator';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @ApiOperation({ summary: '현재 고양이 가져오기' })
  @Get()
  getCurrentCat() {
    return 'current cat';
  }

  @ApiResponse({
    status: 500,
    description: 'Server Error...',
  })
  @ApiResponse({
    status: 200,
    description: '성공!',
    type: ReadOnlyCatDto,
  })
  @ApiOperation({ summary: '회원가입' })
  @Post()
  async signUp(@Body() body: CatRequestDto) {
    return await this.catsService.signUp(body);
  }

  @ApiOperation({ summary: '로그인' })
  @Post('login')
  logIn() {
    return 'login';
  }

  @ApiOperation({ summary: '로그아웃' })
  @Post('logout')
  logOut() {
    return 'logout';
  }

  @ApiOperation({ summary: '고양이 이미지 업로드' })
  @Post('upload/cats')
  uploadCatImg() {
    return 'uploadImg';
  }
}
