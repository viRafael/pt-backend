import { ListarTasksUseCase } from "./ListarTasksUseCase"
import { Request, Response } from "express"

export class ListarTasksController {
    async handle(req: Request, res: Response) {
        const listarTasksUseCase = new ListarTasksUseCase()
        const resultado = listarTasksUseCase.execute()

        res.status(200).json(resultado)
        return 
    }
}