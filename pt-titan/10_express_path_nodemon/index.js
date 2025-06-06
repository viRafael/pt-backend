const express = require('express');
const path = require('path');

// Constantes
const PORT = 3000;

const app = express();

const basePath = path.join(__dirname, 'templates');

app.listen(PORT, () => {
    console.log(`Aplicação rodando na Porta ${PORT}`)
})

app.get('/', (req, res) => {
    // res.send('Hello, World!')
    res.sendFile(`${basePath}/index.html`);
});