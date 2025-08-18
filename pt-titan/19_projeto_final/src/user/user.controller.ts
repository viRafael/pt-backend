import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create.user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Rota de Criação de Usuario
  @Post('/create-user')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  // Rota para retornar as métricas do usuario
  @Get('/get-user-metrics/:id-user')
  getUserMetrics(@Param('id-user', ParseUUIDPipe) idUser: string) {
    return this.userService.getUserMetrics(idUser);
  }
}
