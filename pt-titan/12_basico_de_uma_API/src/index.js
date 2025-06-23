const express = require('express')
const app = express()

app.use(
    express.urlencoded({
        extends: true
    })
)

app.use(express.json())

// Rotas - Endpoint
app.get('/', (req, res) => {
    res.json({message: "Primeira rota criada, TESTANDO!!"})
})

app.listen(3033)