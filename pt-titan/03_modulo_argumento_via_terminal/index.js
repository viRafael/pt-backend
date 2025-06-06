import {minimist} from 'minimist';

// Jogamos no terminal: node index.js --nome=Rafael

const args = minimist(process.argv.slice(2));

console.log(args);

const name = args['nome'];

console.log(nome);