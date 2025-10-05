import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}

  async signup(data: { name: string; phone: string; email?: string | null; provider: string }) {
    const user = await this.prisma.user.create({
      data: {
        name: data.name,
        phoneNumber: data.phone,
        email: data.email?.toLowerCase(),
        authProvider: data.provider,
        role: 'PASSENGER',
        verified: true,
      },
    });
    await this.prisma.wallet.create({ data: { userId: user.id, currency: 'GHS' } });
    const token = await this.jwt.signAsync({ sub: user.id });
    return { token, user };
  }

  async login(provider: string, token: string) {
    // For MVP, trust token is valid (stub). Later: verify with Firebase Admin SDK
    const user = await this.prisma.user.findFirst({ where: { authProvider: provider } });
    if (!user) throw new UnauthorizedException('User not found');
    const jwt = await this.jwt.signAsync({ sub: user.id });
    return { token: jwt, user };
  }

  async me(userId: string) {
    return this.prisma.user.findUnique({ where: { id: userId } });
  }
}
