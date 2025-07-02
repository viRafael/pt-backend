import { Request, Response } from "express";
import { RemoverTaskUseCase } from "./RemoverTaskUseCase";

export class RemoverTaskController {
    async handle(req: Request, res: Response) {
        const { id } = req.params

        const removerTaskUseCase = new RemoverTaskUseCase()
        const resultado = removerTaskUseCase.executar({ id })

        res.status(200).json(resultado)
        return 
    }
}