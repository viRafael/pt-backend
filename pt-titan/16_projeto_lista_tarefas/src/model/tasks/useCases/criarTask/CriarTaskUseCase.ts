import { Task } from "../../../../../prisma/generated/prisma";
import { prisma } from "../../../../prisma/cliente";
import { CriarTaskDTO } from "../../dto/CriarTaskDTO";

export class CriarTaskUseCase {
    async executar({ titulo, descricao }: CriarTaskDTO): Promise<Task> { // Pode ter um erro aqui, por causa do import "task"
        //Criar a task
        const task = await prisma.create({
            data: {
                titulo,
                descricao
            }
        })

        return task
    }
}