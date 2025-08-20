import {
  Body,
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

// Criamos uma interface que estende a Request do Express e adiciona a propriedade 'user'
interface RequestWithUser extends Request {
  user: {
    sub: string; // 'sub' é o ID do usuário que vem do payload do JWT
  };
}

@Controller('meals')
@UseGuards(JwtAuthGuard)
export class MealsController {
  constructor(private readonly mealsService: MealsService) {}

  // Rota para criar uma refeição
  @Post('/create-meal')
  create(@Req() req: RequestWithUser, @Body() createMealDTO: CreateMealsDTO) {
    // A guarda já garante que 'user' existe, então a verificação foi removida.
    return this.mealsService.create(req.user.sub, createMealDTO);
  }

  // Rota para deletar uma refeição
  @Delete('/delete-meal/:id-meal')
  delete(
    @Req() req: RequestWithUser,
    @Param('id-meal', ParseUUIDPipe) idMeal: string,
  ) {
    return this.mealsService.delete(req.user.sub, idMeal);
  }

  // Rota para atualizar um refeição
  @Patch('/update-meal/:id-meal')
  updateMeal(
    @Req() req: RequestWithUser,
    @Param('id-meal', ParseUUIDPipe) idMeal: string,
    @Body() updateMealDTO: UpdateMealDTO, // Corrigido o nome da variável
  ) {
    return this.mealsService.updateMeal(req.user.sub, idMeal, updateMealDTO);
  }

  // Rota para listar todas as refeições do usuario
  @Get('/get-all-meals')
  getAllMeals(@Req() req: RequestWithUser) {
    return this.mealsService.getAllMeals(req.user.sub);
  }

  // Rota para listar uma refeição específica do usuário
  @Get('/get-meal/:meal-id')
  getMeal(
    @Req() req: RequestWithUser,
    @Param('meal-id', ParseUUIDPipe) mealId: string,
  ) {
    return this.mealsService.getMealById(req.user.sub, mealId);
  }
}
