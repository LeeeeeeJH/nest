import { LoginRequestDto } from './dto/login.request.dto';
import { CatsRepository } from './../cats/cats.respository';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly catsReposity: CatsRepository,
    private jwtService: JwtService,
  ) {}

  async jwtLogIn(data: LoginRequestDto) {
    const { email, password } = data;

    const cat = await this.catsReposity.findCatByEmail(email);

    if (!cat) {
      throw new UnauthorizedException('이메일과 비밀번호를 확인해주세요.');
    }

    const isPasswordValidated: boolean = await bcrypt.compare(
      password,
      cat.password,
    );

    if (!isPasswordValidated) {
      throw new UnauthorizedException('이메일과 비밀번호를 확인해주세요.');
    }

    const payload = { email: email, sub: cat.id };

    return {
      token: this.jwtService.sign(payload),
    };
  }
}
