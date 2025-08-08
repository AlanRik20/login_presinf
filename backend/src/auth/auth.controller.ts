// auth.controller.ts
import { Controller, Post, Body, Res, Get, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Response, Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
async login(
  @Body() body: any,
  @Res({ passthrough: true }) res: Response
) {
  const { email, password } = body;
  const { access_token, user } = await this.authService.login(email, password);

  res.cookie('token', access_token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: false, // true en producción con HTTPS
    maxAge: 1000 * 60 * 60 * 24, // 1 día
  });

  return { user };
}

  @Get('verify')
  @UseGuards(JwtAuthGuard)
  async verify(@Req() req: Request) {
    return req.user; // Esto lo devuelve JwtStrategy.validate()
  }

  @Post('logout')
  async logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('token');
    return { message: 'Logout exitoso' };
  }
}
