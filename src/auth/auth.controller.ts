import { Controller, Post, Body, Get, UseGuards, Req } from '@nestjs/common';
import { User } from '.prisma/client';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LoginDto, AuthResponse } from './auth.dto';
import { Request } from 'express';
import AuthUser from 'src/common/decorators/auth-user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('login')
  login(@Body() data: LoginDto): Promise<AuthResponse> {
    return this.service.login(data);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  me(@AuthUser() user: User): User {
    return user;
  }
}
