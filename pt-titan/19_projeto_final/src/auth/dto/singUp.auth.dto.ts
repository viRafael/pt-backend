import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

// Cadastro
export class SignUpAuthDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
