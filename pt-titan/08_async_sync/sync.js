import fs from 'fs';

console.log('Start');

fs.writeFileSync('arquivo.txt', 'Hello World - arquivo sync');

console.log('End');