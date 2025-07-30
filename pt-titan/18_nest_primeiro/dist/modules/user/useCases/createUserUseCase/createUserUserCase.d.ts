import { UserRepository } from '../../repositories/UserRepository';
import { User } from '../../entities/User';
interface CreateUserRequest {
    email: string;
    name: string;
    password: string;
}
export declare class CreateUserUseCase {
    private userRepository;
    constructor(userRepository: UserRepository);
    execute({ email, name, password }: CreateUserRequest): Promise<User>;
}
export {};
