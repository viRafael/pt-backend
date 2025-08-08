import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateMealDTO {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  name?: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  description?: string;

  @IsNotEmpty()
  @IsBoolean()
  @IsOptional()
  onDiet?: boolean;
}
