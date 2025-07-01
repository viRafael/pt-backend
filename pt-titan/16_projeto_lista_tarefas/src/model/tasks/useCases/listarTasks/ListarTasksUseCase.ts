import { prisma } from "../../../../prisma/cliente";

export class ListarTasksUseCase {
    async execute() {
        //Pegar todos os tados
        const tasks = await prisma.task.findMany()

        return tasks
    }
}