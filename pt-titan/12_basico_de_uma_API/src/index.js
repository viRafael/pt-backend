const express = require('express')
const app = express()

//Midleware
app.use(
    express.urlencoded({
        extends: true
    })
)

app.use(express.json())

// Rotas - Endpoint
app.post('/criarproduto', (req, res) => {
    const nome = req.body.name
    const preco = req.body.price

    if(!nome) {
        res.status(422).json({
            message: "O campo 'name' é obrigatorio"
        })
        return
    }

    console.log(nome)
    console.log(preco)

    res.status(201).json({
        message: `O produto ${nome} foi enviado com sucesso!`
    })
})

app.get('/', (req, res) => {
    res.status(200).json({message: "Primeira rota criada, TESTANDO!!"})
})

app.listen(3033)