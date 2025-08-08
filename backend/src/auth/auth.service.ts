import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, pass: string) {
    const user = await this.userService.findByEmail(email);
    
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }

    throw new UnauthorizedException('Credenciales inválidas');
  }

  async login(email: string, pass: string) {
    const user = await this.validateUser(email, pass);
    const payload = { email: user.email, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
      user, // 👈 devolvemos el usuario para que el front lo pueda mostrar
    };
  }
}
