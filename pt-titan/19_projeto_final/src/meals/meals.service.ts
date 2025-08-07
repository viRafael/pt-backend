import { Injectable } from '@nestjs/common';
import { prisma } from 'src/prisma/cliente';

@Injectable()
export class MealsService {
  create() {}

  // Implementação da logica da rota para listar todas as refeições do usuario
  async getAllMeals() {
    return prisma.meal.findMany();
  }

  // Implementação da rota para listar uma refeição especifica do usuario
  async getMealById(idUser: string) {}

  async delete() {}
}
