import { Task } from "@prisma/client";
import { prisma } from "../../../../prisma/cliente";
import { CriarTaskDTO } from "../../dto/CriarTaskDTO";

export class CriarTaskUseCase {
    async executar({ titulo, descricao, concluida }: CriarTaskDTO): Promise<Task> { // Pode ter um erro aqui, por causa do import "task"
        //Criar a task
        const task = await prisma.task.create({
            data: {
                titulo: titulo,
                descricao: descricao,
                concluida: concluida
            }
        })

        return task
    }
}