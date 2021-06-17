import { AuthService } from './auth/auth.service';
import { Controller, Get, Post, Request, UseGuards, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.body.email, req.body.password);
  }

  
  @UseGuards(JwtAuthGuard)
  @Post('auth/verify')
  async verify(@Request() req) {
    return req.user;
  }
}
