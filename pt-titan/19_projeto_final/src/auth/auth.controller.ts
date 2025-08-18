import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDTO } from './dto/signUp.auth.dto';
import { CreateUserDto } from 'src/user/dto/create.user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Cadastro
  @Post('/sign-up')
  async signUp(@Body() signUpDto: SignUpDTO) {
    const user = await this.authService.signUp(signUpDto);

    return {
      message: 'Usuário criado com sucesso',
      data: user,
    };
  }

  // Login
  @Get('sign-in')
  async signIn(@Body() createUserDTO: CreateUserDto) {
    const user = await this.authService.signIn(createUserDTO);

    return {
      message: 'Usuário autenticado com sucesso',
      data: user,
    };
  }
}
