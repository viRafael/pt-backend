import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { prisma } from 'src/prisma/cliente';
import { User } from '@prisma/client';
import { isUUID } from 'class-validator';

@Injectable()
export class UserService {
  // Implementação da logica da rota de criação de usuario
  async create({ name, email, password }: CreateUserDto): Promise<User> {
    // Verifica se o email é unico
    const userAlreadyExist = await prisma.user.findUnique({
      where: { email },
    });

    // Caso já haja um usuario com este email
    if (userAlreadyExist) {
      throw new BadRequestException('E-mail já está em uso');
    }

    // Cria o usuario
    try {
      const user = await prisma.user.create({
        data: {
          name: name,
          email: email,
          password: password,
        },
      });

      return user;
    } catch (error) {
      throw new BadRequestException(error, 'Erro ao criar usuário');
    }
  }

  // Implementação da rota para listar as métricas de um usuario
  async getUserMetrics(idUser: string): Promise<{
    amountOfMeals: number;
    amountOfMealsOnDiet: number;
    amountOfMealsOutDiet: number;
    bestSequence: number;
  }> {
    // Verifica se o idUser é de fato um ID
    if (!isUUID(idUser)) {
      throw new BadRequestException('ID de usuário inválido');
    }

    try {
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
    } catch (error) {
      throw new BadRequestException(
        error,
        'Erro ao buscar métricas do usuário',
      );
    }
  }
}
