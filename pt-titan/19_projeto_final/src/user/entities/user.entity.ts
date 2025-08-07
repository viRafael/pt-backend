import { CreateUserDto } from '../dto/create.user.dto';

export class User {
  name: string;
  email: string;
  password: string;

  constructor({ name, email, password }: CreateUserDto) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
