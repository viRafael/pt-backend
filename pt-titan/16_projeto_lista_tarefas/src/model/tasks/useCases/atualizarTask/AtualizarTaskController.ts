import { Request, Response } from "express";
import { AtualizarTaskUseCase } from "./AtualizarTaslkUseCase";

export class AtualizarTaskController {
    async handle(req: Request, res: Response) {
        const { titulo, descricao, concluida } = req.body
        const { id } = req.params

        const atualizarTaskUseCase = new AtualizarTaskUseCase()
        const resultado = atualizarTaskUseCase.executar(id, { titulo, descricao, concluida })

        res.status(200).json(resultado)
        return 
    }
}