import Chalk from "chalk";

const nota = 4;


if (nota >= 7) {
    console.log(Chalk.green.bold("Parabéns, você foi aprovado!"));
} else {
    console.log(Chalk.bgRed.yellow("Infelizmente você foi reprovado!"));
}