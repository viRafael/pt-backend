import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { User } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  // Implementação da logica da rota de criação de usuario
  async create(createUserDto: CreateUserDto): Promise<User> {
    // Verifica se o email é unico
    const userAlreadyExist = await this.prismaService.user.findUnique({
      where: {
        email: createUserDto.email,
      },
    });

    // Caso já haja um usuario com este email
    if (userAlreadyExist) {
      throw new ConflictException('Credenciais inválidas');
    }

    // Cria o usuario
    return this.prismaService.user.create({
      data: {
        name: createUserDto.name,
        email: createUserDto.email,
        password: createUserDto.password,
      },
    });
  }

  // Implementação da rota para listar as métricas de um usuario
  async getUserMetrics(idUser: string): Promise<{
    amountOfMeals: number;
    amountOfMealsOnDiet: number;
    amountOfMealsOutDiet: number;
    bestSequence: number;
  }> {
    const [amountOfMeals, amountOfMealsOnDiet, amountOfMealsOutDiet, meals] =
      await Promise.all([
        this.prismaService.meal.count({
          where: { userId: idUser },
        }),
        this.prismaService.meal.count({
          where: { userId: idUser, onDiet: true },
        }),
        this.prismaService.meal.count({
          where: { userId: idUser, onDiet: false },
        }),
        this.prismaService.meal.findMany({
          where: { userId: idUser },
          orderBy: { created_at: 'asc' },
          select: { onDiet: true },
        }),
      ]);

    let bestSequence = 0;
    let currentSequence = 0;

    for (const meal of meals) {
      if (meal.onDiet) {
        currentSequence++;
        if (currentSequence > bestSequence) {
          bestSequence = currentSequence;
        }
      } else {
        currentSequence = 0;
      }
    }

    return {
      amountOfMeals: amountOfMeals,
      amountOfMealsOnDiet: amountOfMealsOnDiet,
      amountOfMealsOutDiet: amountOfMealsOutDiet,
      bestSequence: bestSequence,
    };
  }
}
