import { CreateUserUseCase } from "src/modules/user/useCases/createUserUseCase/createUserUserCase";
import { CreateUserBody } from "./dtos/createUserBody";
export declare class UserController {
    private createUserUseCase;
    constructor(createUserUseCase: CreateUserUseCase);
    createPost(body: CreateUserBody): Promise<import("../../../../modules/user/entities/User").User>;
}
