import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/cliente";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { AppError } from "../../../../errors/AppError";

export class CreateUserUseCase {
    async execute({ name, email}: CreateUserDTO): Promise<User > {
        // Verificar se User já existe
        const userAlreadyExists = await prisma.user.findUnique({
            where: {
                email
            }
        });

        if (userAlreadyExists) {
            throw new AppError("User already exists!")
        }

        // Cria o User
        const user = await prisma.user.create({
            data: {
                name, 
                email
            }
        })

        return user;
    }
}