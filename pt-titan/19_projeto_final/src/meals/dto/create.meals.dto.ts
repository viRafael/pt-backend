import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateMealsDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsBoolean()
  onDiet: boolean;
}
