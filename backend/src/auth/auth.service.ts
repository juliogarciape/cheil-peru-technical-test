import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { signInDto, signUpDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async signIn(data: signInDto): Promise<{ access_token: string }> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!user) {
      return null;
    }

    if (user.password !== data.password) {
      return null;
    }

    const payload = { sub: user.userId, username: user.name };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(data: signUpDto) {
    const user = await this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    });

    return user;
  }
}
