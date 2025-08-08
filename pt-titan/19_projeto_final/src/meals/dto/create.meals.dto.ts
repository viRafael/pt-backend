import { IsBoolean, IsNotEmpty, IsString, IsUUID } from 'class-validator';

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

  @IsString()
  @IsNotEmpty()
  @IsUUID()
  userId: string;
}
