import { Request, Response } from "express";
import { CriarTaskUseCase } from "./CriarTaskUseCase";

export class CriarTaskController {
    async handle(req: Request, res: Response) {
        const { titulo, descricao, concluida } = req.body
        
        const criarTasUseCase = new CriarTaskUseCase()
        const resultado = criarTasUseCase.executar({ titulo, descricao, concluida })

        res.status(200).json(resultado)
        return 
    }
}