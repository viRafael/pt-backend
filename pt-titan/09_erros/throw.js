const x = 'adada';

// veriicar se x é um número

if(!Number.isInteger(x)) {
    throw new Error('x não é um número inteiro');
}

console.log('continuando o codigo...');

// o THROW encerra o nosso programa 