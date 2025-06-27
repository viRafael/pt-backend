"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
class Calculadora {
    constructor(currentInput, operator, previusInput) {
        this.currentInput = 0;
        this.operator = '';
        this.previusInput = 0;
    }
    appendNumber(novoValor) {
        this.previusInput = this.currentInput;
        this.currentInput = novoValor;
    }
    setOperator(novoOperador) {
        this.operator = novoOperador;
    }
    calculate() {
        let resultado;
        switch (this.operator) {
            case "+":
                resultado = (this.previusInput) + (this.currentInput);
                break;
            case "-":
                resultado = (this.previusInput) - (this.currentInput);
                break;
            case "*":
                resultado = (this.previusInput) * (this.currentInput);
                break;
            case "/":
                resultado = (this.previusInput) / (this.currentInput);
                break;
        }
        console.log(`Calculando... o resultado é ${resultado}`);
    }
}
exports.Calculadora = Calculadora;
// Soma: 5 + 3 = 8
const calcSoma = new Calculadora(0, '', 0);
calcSoma.appendNumber(5);
calcSoma.appendNumber(3);
calcSoma.setOperator('+');
calcSoma.calculate();
// Subtração: 10 - 4 = 6
const calcSub = new Calculadora(0, '', 0);
calcSub.appendNumber(10);
calcSub.appendNumber(4);
calcSub.setOperator('-');
calcSub.calculate();
// Multiplicação: 7 * 6 = 42
const calcMult = new Calculadora(0, '', 0);
calcMult.appendNumber(7);
calcMult.appendNumber(6);
calcMult.setOperator('*');
calcMult.calculate();
// Divisão: 20 / 5 = 4
const calcDiv = new Calculadora(0, '', 0);
calcDiv.appendNumber(20);
calcDiv.appendNumber(5);
calcDiv.setOperator('/');
calcDiv.calculate();
