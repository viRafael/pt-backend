import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
import { SignInDTO } from './dto/signIn.auth.dto';
import { User } from '@prisma/client';
import { UserService } from 'src/user/user.service';
import { CreateUserDto } from 'src/user/dto/create.user.dto';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly prismaService: PrismaService,
  ) {}

  // Cadastro
  async signUp(createUserDTO: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDTO);
  }

  async signIn(signInDTO: SignInDTO): Promise<{ accessToken: string }> {
    // Verificar se existe esse usuario no bando de dados
    const user = await this.prismaService.user.findUnique({
      where: {
        email: signInDTO.email,
      },
    });

    if (!user) {
      throw new NotFoundException('Credenciais inválidas');
    }

    // Verificamos se a senha que ele passou está correta, não temos scrypt da senha
    const correctPassword = user.password === signInDTO.password;

    if (!correctPassword) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    // Fazemos o login
    return {
      accessToken: await this.jwtService.signAsync({
        // Payload | Data
        sub: user.id,
        email: user.email,
        name: user.name,
      }),
    };
  }
}
