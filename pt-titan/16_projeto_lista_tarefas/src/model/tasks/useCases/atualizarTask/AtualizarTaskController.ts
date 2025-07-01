import { Request, Response } from "express";
import { AtualizarTaskUseCase } from "./AtualizarTaslkUseCase";

export class AtualizarTaskController {
    async handle(req: Request, res: Response) {
        const { taskId } = req.body

        const atualizarTaskUseCase = new AtualizarTaskUseCase()
        const resultado = atualizarTaskUseCase.executar({ taskId })

        return res.status(200).json(resultado)
    }
}