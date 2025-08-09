import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
import { prisma } from 'src/prisma/cliente';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  // Cadastro
  async signUp(name: string, email: string, password: string) {
    // Verifica se o usuário já existe
    const existUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existUser) {
      throw new BadRequestException('Email em uso');
    }

    // Cria o usuário no banco de dados
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: password,
      },
    });

    return user;
  }

  async signIn(email: string, password: string) {
    // Verificar se existe esse usuario no bando de dados
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    // Verificamos se a senha que ele passou está correta, não temos scrypt da senha
    const correctPassword = user.password === password;
    if (!correctPassword) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const payload = {
      username: user.email,
      sub: user.id,
    };

    return { accessToken: this.jwtService.sign(payload) };
  }
}
