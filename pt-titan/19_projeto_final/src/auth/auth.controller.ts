import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInAuthDTO } from './dto/signIn.auth.dto';
import { SignUpAuthDTO } from './dto/singUp.auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Cadastro
  @Post('/signUp')
  async signUp(@Body() signUpDto: SignUpAuthDTO) {
    const { name, email, password } = signUpDto;

    const user = await this.authService.signUp(name, email, password);

    return {
      success: true,
      message: 'Usuário criado com sucesso',
      data: user,
    };
  }

  // Login
  @Get('signIn')
  async signIn(@Body() body: SignInAuthDTO) {
    const { email, password } = body;

    const user = await this.authService.signIn(email, password);

    return {
      success: true,
      message: 'Usuário autenticado com sucesso',
      data: user,
    };
  }
}
