import { ListarTasksUseCase } from "./ListarTasksUseCase"
import { Request, Response } from "express"

export class ListarTasksController {
    async handle(req: Request, res: Response) {
        const { } = req.body

        const listarTasksUseCase = new ListarTasksUseCase()
        const resultado = listarTasksUseCase.execute()

        return res.status(200).json(resultado)
    }
}