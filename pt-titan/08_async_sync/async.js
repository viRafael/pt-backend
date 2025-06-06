import fs from 'fs';

console.log('Start');

fs.writeFile('arquivo.txt', 'Hello World - arquivo async', function(err) {
    setTimeout(() => {
        console.log('arquivo.txt criado');
    }, 10000)
})

console.log("End")