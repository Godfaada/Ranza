import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Post('signup')
  signup(@Body() body: { name: string; phone: string; email?: string; provider: string }) {
    return this.auth.signup(body);
  }

  @Post('login')
  login(@Body() body: { provider: string; token: string }) {
    return this.auth.login(body.provider, body.token);
  }

  @Get('me')
  me(@Req() req: any) {
    const userId = req.user?.sub || req.headers['x-user-id'];
    return this.auth.me(String(userId));
  }
}
