import { randomUUID } from "crypto"
import { Replace } from "src/utils/replace"

interface UserSchema {
    email: string
    password: string 
    name: string
    createdAt: Date
}

export class User {
    propriedade: UserSchema
    _id : string

    constructor(propriedade: Replace<UserSchema, { createAt?: Date}>, id?: string) {
        this.propriedade = {
            ... propriedade,
            createdAt: propriedade.createdAt || new Date()
        }
        this._id = id || randomUUID()
    }

    // Métodos Get e Set
    get id(): string {
        return this._id
    }

    get email(): string {
        return this.propriedade.email
    }

    set email(email: string) {
        this.propriedade.email = email
    }

    get password(): string {
        return this.propriedade.password
    }

    set password(password: string) {
        this.propriedade.password = password
    }

    get name(): string {
        return this.propriedade.name
    }

    set name(name: string) {
        this.propriedade.name = name
    }

    get createdAt(): string {
        return this.createdAt
    }

    set createdAt(createdAt: string) {
        this.createdAt = createdAt
    }
} 