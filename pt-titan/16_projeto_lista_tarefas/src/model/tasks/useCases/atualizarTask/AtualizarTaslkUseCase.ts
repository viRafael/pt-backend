import { AtualizarTaskDTO } from "../../dto/AtulizarTaskDTO";
import { prisma } from "../../../../prisma/cliente";
import { Task } from "@prisma/client";


export class AtualizarTaskUseCase {
    async executar(id: string, { titulo, descricao, concluida }: AtualizarTaskDTO): Promise<Task | null> {
        // Verificar se a task existe
        const taskExiste = await prisma.task.findUnique({
            where: {
                id: id
            }
        })

        let atualizarTask = null;
        if (taskExiste) {
            //Atualizar a task
            atualizarTask = await prisma.task.update({
                where: {
                    id: id
                },
                data: {
                    titulo: titulo,
                    descricao: descricao,
                    concluida: concluida
                }
            })
        }

        return atualizarTask
    }
}