import express, { Request, Response } from 'express';
import { CriarTaskController } from './model/tasks/useCases/criarTask/CriarTaskController';
import { RemoverTaskController } from './model/tasks/useCases/removerTask/RemoverTaskController';
import { AtualizarTaskController } from './model/tasks/useCases/atualizarTask/AtualizarTaskController';
import { ListarTasksController } from './model/tasks/useCases/listarTasks/ListarTasksController';

// Variaveis
const PORTA = 3033;

const criarTaskController = new CriarTaskController()
const removerTaskController = new RemoverTaskController()
const atualizarTaskController = new AtualizarTaskController()
const listarTasksController = new ListarTasksController()

const app = express()

app.use(express.json())

app.get("/listarTasks", listarTasksController.handle)
app.patch("/task/:id", atualizarTaskController.handle)
app.post("/criarTask", criarTaskController.handle)
app.delete("/removerTask", removerTaskController.handle)

app.post('/', (req: Request, res: Response) => {
    res.sendFile('./view/public/index.html');
})

app.listen(PORTA, () => {
    console.log(`Servidor iniciado na porta ${PORTA}`)
})

