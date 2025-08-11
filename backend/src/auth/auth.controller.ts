// auth.controller.ts
import {
  Controller,
  Post,
  Body,
  Res,
  Get,
  Req,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { Response } from 'express';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(
    @Body()
    registerDto:RegisterDto,
  ){
    console.log(registerDto);
    return this.authService.register(registerDto)
  }

  @Post('login')
  login(
    @Body()
    loginDto:LoginDto
  ){
    return this.authService.login(loginDto)
  }
 @Get('verify')
  @UseGuards(JwtAuthGuard)
  verify(@Req() req) {
    return req.user; // Esto lo devuelve JwtStrategy.validate()
  }
  

  @Post('logout')
  async logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('token');
    return { message: 'Logout exitoso' };
  }
}
