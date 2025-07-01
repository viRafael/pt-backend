import { AtualizarTaskDTO } from "../../dto/AtulizarTaskDTO";
import { prisma } from "../../../../prisma/cliente";
import { Task } from "../../../../../prisma/generated/prisma";

export class AtualizarTaskUseCase {
    async executar({ taskId }: AtualizarTaskDTO): Promise<Task> {
        // Verificar se a task existe
        const taskExiste = await prisma.task.findUnique({
            where: {
                id: taskId
            }
        })

        let atualizarTask = null;
        if (taskExiste) {
            //Atualizar a task
            atualizarTask = await prisma.task.delete({
                where: {
                    id: taskId
                }
            })
        }

        return atualizarTask
    }
}