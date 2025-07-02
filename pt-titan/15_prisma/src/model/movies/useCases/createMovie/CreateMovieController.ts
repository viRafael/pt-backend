
import { Request, Response } from "express"
import { CreateUseMovieCase } from "./CreateUseMovieCase"

export class CreateMovieController {
    async handle(req: Request, res: Response) {
        const { title, duration, release_date } = req.body

        const createMovieUseCase = new CreateUseMovieCase()
        const result = await createMovieUseCase.execute({ title, duration, release_date })

        res.status(201).json(result)
        return
    }
}