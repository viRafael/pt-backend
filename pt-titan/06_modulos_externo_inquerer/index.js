import inquirer from 'inquirer';

inquirer.prompt([
    {
        name: 'pergunta 1', 
        message: 'Qual é o seu nome?',
    },
    {
        name: 'pergunta 2',
        message: 'Qual é a sua idade?',
    }]).then((answers) => {
        console.log((`Olá. Meu nome é ${answers['pergunta 1']} e tenho ${answers['pergunta 2']} anos.`))
    }).catch(err => {console.log(err)});