import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMealsDTO } from './dto/create.meals.dto';
import { UpdateMealDTO } from './dto/update.meals.dto';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Meal } from '@prisma/client';

@Injectable()
export class MealsService {
  constructor(private readonly prismaService: PrismaService) {}

  // Rota para criar uma refeição
  create(userId: string, createMealDTO: CreateMealsDTO): Promise<Meal> {
    return this.prismaService.meal.create({
      data: {
        name: createMealDTO.name,
        description: createMealDTO.description,
        onDiet: createMealDTO.onDiet,
        userId: userId,
      },
    });
  }

  // Rota para deletar uma refeição
  async delete(idUser: string, idMeal: string) {
    // Verificamos se a meal é do usuario logado
    const meal = await this.prismaService.meal.findFirst({
      where: {
        id: idMeal,
        userId: idUser,
      },
    });

    if (!meal) {
      throw new NotFoundException('Refeição não encontrada');
    }

    // Deletamos a refeição
    return this.prismaService.meal.delete({
      where: {
        id: idMeal,
      },
    });
  }

  // Implementação da logica da rota de atualização de refeição
  async updateMeal(
    idUser: string,
    idMeal: string,
    updateMealDTO: UpdateMealDTO,
  ): Promise<Meal> {
    // Verificar se existe a refeição
    const meal = await this.prismaService.meal.findUnique({
      where: {
        id: idMeal,
        userId: idUser,
      },
    });

    if (!meal) {
      throw new NotFoundException('Refeição não encontrada');
    }

    // Atualiza a meal
    return await this.prismaService.meal.update({
      where: {
        id: idMeal,
      },
      data: {
        ...updateMealDTO,
        updated_at: new Date(),
      },
    });
  }

  // Implementação da logica da rota para listar todas as refeições do usuario
  getAllMeals(idUser: string): Promise<Meal[]> {
    return this.prismaService.meal.findMany({
      where: {
        userId: idUser,
      },
    });
  }

  // Implementação da rota para listar uma refeição especifica do usuario
  async getMealById(idUser: string, mealId: string): Promise<Meal> {
    const meal = await this.prismaService.meal.findFirst({
      where: {
        userId: idUser,
        id: mealId,
      },
    });

    // Caso a meal esteja vazia, lançar uma exceção
    if (!meal) {
      throw new NotFoundException('Refeição não encontrada');
    }

    return meal;
  }
}
