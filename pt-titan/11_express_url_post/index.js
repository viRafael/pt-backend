const express = require('express');
const path = require('path');

const PORT = 3000;

const basePath = path.join(__dirname, 'templates');

const app = express();

//ler o body
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Aplicação rodando na Porta ${PORT}`);
})

app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`);
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id

    //leitura da tabela users e resgatar um usuario do banco
    console.log(`Estamos procurando pelo usuario ${id}`);

    res.sendFile(`${basePath}/users.html`);
});

app.post('/users/save', (req, res) => {
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do usuario é ${name} e a idade é ${age}`);

    res.sendFile(`${basePath}/userform.html`);
});

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});