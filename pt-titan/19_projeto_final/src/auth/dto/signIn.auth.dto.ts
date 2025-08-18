import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

// Login
export class SignInDTO {
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
