import { User } from "../entities/User";
import { UserRepository } from "./UserRepository";
export declare class UserRepositoryInMemory implements UserRepository {
    users: User[];
    create(user: User): Promise<void>;
}
