import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { prisma } from 'src/prisma/cliente';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  // Implementação da logica da rota de criação de usuario
  async create({ name, email, password }: CreateUserDto): Promise<User> {
    // Verifica se o email é unico
    const userAlreadyExist = await prisma.user.findUnique({
      where: { email },
    });

    // Cria o usuario caso o email não exista
    if (!userAlreadyExist) {
      const user = await prisma.user.create({
        data: {
          name: name,
          email: email,
          password: password,
        },
      });

      return user;
    }

    // Já existe um usuario com esse email
    throw new BadRequestException('E-mail já está em uso');
  }

  // Implementação da rota para listar as métricas de um usuario
  async getUserMetrics() {}
}
