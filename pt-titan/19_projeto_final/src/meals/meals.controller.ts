import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MealsService } from './meals.service';
import { CreateMealsDTO } from './dto/create.meals.dto';
import { UpdateMealDTO } from './dto/update.meals.dto';

@Controller('meals')
export class MealsController {
  constructor(private readonly mealsService: MealsService) {}

  // Rota para criar uma refeição
  @Post('/createMeal')
  create(@Body() body: CreateMealsDTO) {
    const { name, description, onDiet, userId } = body;

    return this.mealsService.create({ name, description, onDiet, userId });
  }

  // Rota para deletar uma refeição
  @Delete('/deleteMeal/:idMeal')
  delete(@Param('idMeal') idMeal: string) {
    return this.mealsService.delete(idMeal);
  }

  // Rota para atualizar um refeição
  @Patch('/updateMeal/:idMeal')
  updateMeal(@Param('idMeal') idMeal: string, @Body() bodyData: UpdateMealDTO) {
    return this.mealsService.updateMeal(idMeal, bodyData);
  }

  // Rota para listar todas as refeições do usuario
  @Get('/getAllMeals/:idUser')
  getAllMeals(@Param('idUser') idUser: string) {
    return this.mealsService.getAllMeals(idUser);
  }

  // Rota para listar uma refeição específica do usuário
  @Get('/getMeal/:userId/:mealId')
  getMeal(@Param('userId') userId: string, @Param('mealId') mealId: string) {
    return this.mealsService.getMealById(userId, mealId);
  }
}
