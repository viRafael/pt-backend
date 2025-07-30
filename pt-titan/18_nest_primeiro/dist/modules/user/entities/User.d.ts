import { Replace } from "src/utils/replace";
interface UserSchema {
    email: string;
    password: string;
    name: string;
    createdAt: Date;
}
export declare class User {
    propriedade: UserSchema;
    _id: string;
    constructor(propriedade: Replace<UserSchema, {
        createAt?: Date;
    }>, id?: string);
    get id(): string;
    get email(): string;
    set email(email: string);
    get password(): string;
    set password(password: string);
    get name(): string;
    set name(name: string);
    get createdAt(): string;
    set createdAt(createdAt: string);
}
export {};
