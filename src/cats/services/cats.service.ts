import { CatsRepository } from '../cats.respository';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Cat } from '../cats.schema';
import * as bcrypt from 'bcrypt';
import { CatRequestDto } from '../dto/cats.request.dto';

@Injectable()
export class CatsService {
  constructor(private readonly catsRepository: CatsRepository) {}

  async getAllCat() {
    const allCat = await this.catsRepository.findAll();
    const readOnlyCats = allCat.map((cat) => cat.readOnlyData);
    return readOnlyCats;
  }
  async signUp(body: CatRequestDto) {
    const { email, name, password } = body;
    const isCatExist = await this.catsRepository.existsByEmail(email);

    if (isCatExist) {
      throw new UnauthorizedException('해당하는 고양이는 이미 존재합니다.');
      //throw new HttpException('해당하는 고양이는 이미 존재합니다.', 403);
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const cat = await this.catsRepository.create({
      email,
      name,
      password: hashedPassword,
    });

    return cat.readOnlyData;
  }
}
