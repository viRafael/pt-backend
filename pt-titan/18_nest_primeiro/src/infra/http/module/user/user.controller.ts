import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserUseCase } from "src/modules/user/useCases/createUserUseCase/createUserUserCase";
import { CreateUserBody } from "./dtos/createUserBody";
import { UserViewModel } from "./viewModule/userViewModel";
import { addAbortListener } from "events";

@Controller('users')
export class UserController {
    constructor(private createUserUseCase: CreateUserUseCase) {

    }

    @Post()
    async createPost(@Body() body: CreateUserBody) {
        const { email, name, password } = body;

        const user = await this.createUserUseCase.execute({
            email,
            name,
            password
        });

        return UserViewModel.toHttp(user);
    }
}


