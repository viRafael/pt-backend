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
  async getUserMetrics(idUser: string): Promise<{
    amountOfMeals: number;
    amountOfMealsOnDiet: number;
    amountOfMealsOutDiet: number;
    bestSequence: number;
  }> {
    //Quantidade total de refeições registradas
    const amountOfMeals = await prisma.meal.count({
      where: { userId: idUser },
    });

    //Quantidade total de refeições dentro da dieta
    const amountOfMealsOnDiet = await prisma.meal.count({
      where: { userId: idUser, onDiet: true },
    });

    //Quantidade total de refeições fora da dieta
    const amountOfMealsOutDiet = await prisma.meal.count({
      where: { userId: idUser, onDiet: false },
    });

    // Melhor sequência de refeições dentro da dieta (maior sequência contínua)
    const meals = await prisma.meal.findMany({
      where: { userId: idUser },
      orderBy: { created_at: 'asc' },
      select: { onDiet: true },
    });

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
