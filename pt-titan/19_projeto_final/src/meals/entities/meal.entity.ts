import { CreateMealsDTO } from '../dto/create.meals.dto';

export class Meal implements CreateMealsDTO {
  name: string;
  description: string;
  onDiet: boolean;

  constructor({ name, description, onDiet }: CreateMealsDTO) {
    this.name = name;
    this.description = description;
    this.onDiet = onDiet;
  }
}
