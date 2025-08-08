// jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: Request) => {
          return req?.cookies?.token || null; // 👈 Lee la cookie
        }
      ]),
      secretOrKey: 'secreto123',
    });
  }

  async validate(payload: any) {
    return { email: payload.email, role: payload.role };
  }
}
