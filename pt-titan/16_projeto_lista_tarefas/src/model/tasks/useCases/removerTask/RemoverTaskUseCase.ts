import { Task } from "@prisma/client";
import { prisma } from "../../../../prisma/cliente";
import { RemoverTaskDTO } from "../../dto/RemoverTaskDTO";

export class RemoverTaskUseCase {
    async executar({ id }: RemoverTaskDTO): Promise<Task | null> {
        // Verificar se a task existe
        const taskExiste = await prisma.task.findUnique({
            where: {
                id: id
            }
        })

        let removerTask = null;
        if (taskExiste) {
            //Excluir a task
            removerTask = await prisma.task.delete({
                where: {
                    id: id
                }
            })
        }

        return removerTask
    }
}