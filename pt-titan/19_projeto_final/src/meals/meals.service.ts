import {
  BadRequestException,
  Body,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { prisma } from 'src/prisma/cliente';
import { CreateMealsDTO } from './dto/create.meals.dto';
import { UpdateMealDTO } from './dto/update.meals.dto';
import { isUUID } from 'class-validator';

@Injectable()
export class MealsService {
  // Rota para criar uma refeição
  create({ name, description, onDiet, userId }: CreateMealsDTO) {
    return prisma.meal.create({
      data: {
        name,
        description,
        onDiet,
        userId,
      },
    });
  }

  // Rota para deletar uma refeição
  async delete(idMeal: string) {
    return prisma.meal.delete({
      where: {
        id: idMeal,
      },
    });
  }

  // Implementação da logica da rota de atualização de refeição
  async updateMeal(idMeal: string, bodyData: UpdateMealDTO) {
    // Verificar se existe a meal
    const meal = await prisma.meal.findUnique({
      where: {
        id: idMeal,
      },
    });

    if (!meal) {
      throw new NotFoundException('Refeição não encontrada');
    }

    // Atualiza a meal
    return await prisma.meal.update({
      where: {
        id: idMeal,
      },
      data: {
        ...bodyData,
        updated_at: new Date(),
      },
    });
  }

  // Implementação da logica da rota para listar todas as refeições do usuario
  async getAllMeals(idUser: string) {
    if (!isUUID(idUser)) {
      throw new BadRequestException('ID de usuário inválido');
    }

    return prisma.meal.findMany({
      where: {
        userId: idUser,
      },
    });
  }

  // Implementação da rota para listar uma refeição especifica do usuario
  async getMealById(idUser: string, mealId: string) {
    if (!isUUID(idUser)) {
      throw new BadRequestException('ID de usuário inválido');
    }

    if (!isUUID(mealId)) {
      throw new BadRequestException('ID de refeição inválido');
    }

    try {
      const meal = await prisma.meal.findFirst({
        where: {
          userId: idUser,
          id: mealId,
        },
      });

      // Caso a meal esteja vazia, lançar uma exceção
      if (!meal) {
        throw new NotFoundException(
          'Refeição não encontrada, provavelmente ID de outro usuário',
        );
      }

      return meal;
    } catch (error) {
      throw new NotFoundException(error, 'Erro ao listar uma refeição');
    }
  }
}
