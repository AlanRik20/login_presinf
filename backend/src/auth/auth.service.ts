import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';

import * as bycryptjs from 'bcryptjs';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register({ nombre, email, password, rol_id }: RegisterDto) {
    const user = await this.userService.findByEmail(email);

    if (user) {
      throw new BadRequestException('User already exists');
    }
    return await this.userService.create({
      nombre,
      email,
      password: await bycryptjs.hash(password, 10),
      rol_id,
    });
  }
  async login({ email, password }: LoginDto) {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('el email no existe');
    }
    const isPasswordValid = await bycryptjs.compare(password, user.password);
    if(!isPasswordValid){
      throw new UnauthorizedException('contraseña errónea')
    }

    const payload = {email: user.email, role: user.rolId}
    const token = await this.jwtService.signAsync(payload)
    return {
      token,
      user,
    };
  }
}