import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

// Login
export class SignInAuthDTO {
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
