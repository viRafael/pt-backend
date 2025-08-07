import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create.user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Rota de Criação de Usuario
  @Post('/createUser')
  createUser(@Body() body: CreateUserDto) {
    const { name, email, password } = body;

    return this.userService.create({ name, email, password });
  }

  // Rota para retornar as métricas do usuario
  @Get('/getUserMetrics/:idUser')
  getUserMetrics(@Param('idUser') idUser: string) {
    return this.userService.getUserMetrics();
  }
}
