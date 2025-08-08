import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { prisma } from 'src/prisma/cliente';
import { CreateMealsDTO } from './dto/create.meals.dto';
import { UpdateMealDTO } from './dto/update.meals.dto';

@Injectable()
export class MealsService {
  // Rota para criar uma refeição
  async create({ name, description, onDiet, userId }: CreateMealsDTO) {
    const meal = await prisma.meal.create({
      data: {
        name,
        description,
        onDiet,
        userId,
      },
    });

    return meal;
  }

  // Rota para deletar uma refeição
  async delete(idMeal: string) {
    try {
      await prisma.meal.delete({
        where: {
          id: idMeal,
        },
      });
      return { message: 'Refeição deletada com sucesso' };
    } catch (error) {
      throw new NotFoundException(error, 'Refeição não encontrada');
    }
  }

  // Implementação da logica da rota de atualização de refeição
  async updateMeal(idMeal: string, bodyData: UpdateMealDTO) {
    return prisma.meal.update({
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
    return prisma.meal.findMany({
      where: {
        userId: idUser,
      },
    });
  }

  // Implementação da rota para listar uma refeição especifica do usuario
  async getMealById(idUser: string, mealId: string) {
    return prisma.meal.findFirst({
      where: {
        userId: idUser,
        id: mealId,
      },
    });
  }
}
