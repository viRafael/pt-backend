// Módulos
const chalk = require('chalk')
const fs = require('fs')

function getArquivo(nomeArquivo) {
    const arquivo = fs.readFileSync(`./arquivosLeitura/${nomeArquivo}`, 'utf-8')
    return arquivo
}

function contarPalavras(arquivo) {
    const listaPalavras = arquivo.split(/\s+/)
    return listaPalavras.length
}

console.log('Processo iniciado')

console.log('Exemplo 1: ', contarPalavras(getArquivo('exemplo1.txt')))
console.log('Exemplo 2: ', contarPalavras(getArquivo('exemplo2.txt')))
console.log('Exemplo 3: ', contarPalavras(getArquivo('exemplo3.txt')))
console.log('Exemplo 4: ', contarPalavras(getArquivo('exemplo4.txt')))

console.log('Processo finalizado')