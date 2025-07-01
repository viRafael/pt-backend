import { prisma } from "../../../../prisma/cliente";
import { RemoverTaskDTO } from "../../dto/RemoverTaskDTO";

export class RemoverTaskUseCase {
    async executar({ taskId, titulo }: RemoverTaskDTO) {
        // Verificar se a task existe
        const taskExiste = await prisma.task.findUnique({
            where: {
                id: taskId
            }
        })

        let removerTask = null;
        if (taskExiste) {
            //Excluir a task
            removerTask = await prisma.task.delete({
                where: {
                    id: taskId
                }
            })
        }

        return removerTask
    }
}