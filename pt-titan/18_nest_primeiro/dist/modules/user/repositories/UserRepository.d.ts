import { User } from "../entities/User";
export declare abstract class UserRepository {
    abstract create(user: User): Promise<void>;
}
