import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { MealsService } from './meals.service';
import { CreateMealsDTO } from './dto/create.meals.dto';
import { UpdateMealDTO } from './dto/update.meals.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guards';
import type { Request } from 'express';

@Controller('meals')
@UseGuards(JwtAuthGuard)
export class MealsController {
  constructor(private readonly mealsService: MealsService) {}

  // Rota para criar uma refeição
  @Post('/create-meal')
  create(@Req() req: Request, @Body() createMealDTO: CreateMealsDTO) {
    const user = req.user;

    if (!user) {
      throw new ConflictException('User não encontrado na requisição');
    }

    return this.mealsService.create(user.sub, createMealDTO);
  }

  // Rota para deletar uma refeição
  @Delete('/delete-meal/:id-meal')
  delete(@Req() req: Request, @Param('id-meal', ParseUUIDPipe) idMeal: string) {
    const user = req.user;

    if (!user) {
      throw new ConflictException('User não encontrado na requisição');
    }

    return this.mealsService.delete(user.sub, idMeal);
  }

  // Rota para atualizar um refeição
  @Patch('/update-meal/:id-meal')
  updateMeal(
    @Req() req: Request,
    @Param('id-meal', ParseUUIDPipe) idMeal: string,
    @Body() UpdateMealDTO: UpdateMealDTO,
  ) {
    const user = req.user;

    return this.mealsService.updateMeal(user.sub, idMeal, UpdateMealDTO);
  }

  // Rota para listar todas as refeições do usuario
  @Get('/get-all-meals')
  getAllMeals(@Req() req: Request) {
    const user = req.user;

    if (!user) {
      throw new ConflictException('User não encontrado na requisição');
    }

    return this.mealsService.getAllMeals(user.sub);
  }

  // Rota para listar uma refeição específica do usuário
  @Get('/get-meal/:meal-id')
  getMeal(
    @Req() req: Request,
    @Param('meal-id', ParseUUIDPipe) mealId: string,
  ) {
    const user = req.user;

    if (!user) {
      throw new ConflictException('User não encontrado na requisição');
    }

    return this.mealsService.getMealById(user.sub, mealId);
  }
}
