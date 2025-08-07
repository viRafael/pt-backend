import { Controller, Get, Param, Post } from '@nestjs/common';
import { MealsService } from './meals.service';

@Controller('meals')
export class MealsController {
  constructor(private readonly mealsService: MealsService) {}

  // Rota para criar uma refeição
  @Post('/createMeal')
  create() {
    return this.mealsService.create();
  }

  // Rota para listar uma refeição especifica do usuario
  @Get('/getMeal/:idUser')
  getMeal(@Param('idUser') idUser: string) {
    return this.mealsService.getMealById(idUser);
  }

  // Rota para deletar uma refeição
  @Post('/deleteMeal')
  delete() {
    return this.mealsService.delete();
  }

  // Rota para listar todas as refeições do usuario
  @Get('/getAllMeals')
  getAllMeals() {
    return this.mealsService.getAllMeals();
  }
}
