import { CreateUserUseCase } from "./CreateUserCase"
import { Request, Response } from "express"

export class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, email } = req.body

        const createUserUseCase = new CreateUserUseCase()
        const result = await createUserUseCase.execute({ name, email })

        res.status(201).json(result)
        return
    }
}