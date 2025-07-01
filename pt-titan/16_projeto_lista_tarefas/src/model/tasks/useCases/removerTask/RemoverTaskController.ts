import { Request, Response } from "express";
import { RemoverTaskUseCase } from "./RemoverTaskUseCase";

export class RemoverTaskController {
    async handle(req: Request, res: Response) {
        const { taskId, titulo } = req.body

        const removerTaskUseCase = new RemoverTaskUseCase()
        const resultado = removerTaskUseCase.executar({ taskId, titulo })

        return resultado
    }
}