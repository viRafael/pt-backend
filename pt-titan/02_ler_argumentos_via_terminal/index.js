// vamos passar na linha de comando o nome
// a linha fica: node index.js nome=Rafael idade=21

console.log(process.argv);

const args = process.argv.slice(2);
const nome = args[0].split("=")[1];
const idade = args[1].split("=")[1];

console.log(`Nome: ${nome} e Idade: ${idade}`);

// Observação: 