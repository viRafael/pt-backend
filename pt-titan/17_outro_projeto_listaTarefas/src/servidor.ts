import express, { Request, Response } from "express"
import { PrismaClient } from "@prisma/client";

//Constantes e Variaveis
const PORTA = 3033

const app = express()
const prisma = new PrismaClient()

//Midlewares
app.use(express.json())

//Rotas
app.post('/criarTask', async (req: Request, res: Response) => {
    const { titulo, descricao, concluida } = req.body 

    const task = await prisma.task.create({
        data: {
            titulo,
            descricao,
            concluida
        }
    }) 

    res.status(200).json(task)
})

app.delete('/removerTask/:id', async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        const task = await prisma.task.delete({
            where: {
                id: id
            }   
        })

        res.status(200).json(task)
    } catch(error) {
        console.log(error)
        res.status(500).json({ error: "Error ao enviar "})
    }
})

app.patch('/atualizarTask/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    const { titulo, descricao, concluida } = req.body

    try {
        const taskAtualizada = await prisma.task.update({
            where: {
                id: id
            }, 
            data: {
                titulo: titulo,
                descricao: descricao,
                concluida: concluida
            }
        });

        res.status(200).json(taskAtualizada)
    } catch(error) {
        res.status(500).json({ error: "Error ao atualizar task"})
    }
})

app.get('/listarTask', async (req: Request, res: Response) => {
    const todasTasks = await prisma.task.findMany()

    res.status(200).json(todasTasks)
})

//Inicialização
app.listen(PORTA, () => {
    console.log(`Servidor iniciado na pora ${PORTA}`)
})