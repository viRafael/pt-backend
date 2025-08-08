import { CreateMealsDTO } from '../dto/create.meals.dto';

export class Meal implements CreateMealsDTO {
  name: string;
  description: string;
  onDiet: boolean;
  userId: string;

  constructor({ name, description, onDiet, userId }: CreateMealsDTO) {
    this.name = name;
    this.description = description;
    this.onDiet = onDiet;
    this.userId = userId;
  }
}
