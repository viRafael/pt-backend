import express, { Request, Response } from 'express';
import { CriarTaskController } from './model/tasks/useCases/criarTask/CriarTaskController';
import { RemoverTaskController } from './model/tasks/useCases/removerTask/RemoverTaskController';

// Variaveis
const PORTA = 3033;

const criarTaskController = new CriarTaskController()
const removerTaskController = new RemoverTaskController()

const app = express()

app.use(express.json())

app.post("/criarTask", criarTaskController.handle)
app.delete("/removerTask", removerTaskController.handle)

app.post('/', (req: Request, res: Response) => {
    res.sendFile('./view/public/index.html');
})

app.listen(PORTA, () => {
    console.log(`Servidor iniciado na porta ${PORTA}`)
})

