import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  validateUser(loginDto: { username: string; password: string }): string | null {
    const { username, password } = loginDto;

    const validUsername = this.configService.get<string>('ADMIN_USERNAME');
    const validPassword = this.configService.get<string>('ADMIN_PASSWORD');

    if (username === validUsername && password === validPassword) {
      return this.generateToken(username);
    }

    return null;
  }

  private generateToken(username: string): string {
    const payload = { username };
    return this.jwtService.sign(payload, {
      secret: this.configService.get<string>('JWT_SECRET'),
      expiresIn: '1h',
    });
  }
}
