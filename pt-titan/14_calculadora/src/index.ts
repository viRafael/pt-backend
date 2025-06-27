export class Calculadora {
    //Atributos
    public currentInput: number; // Valor atual
    public operator: string;
    public previusInput: number; // Valor anterior

    constructor(currentInput: number, operator: string, previusInput: number ) {
        this.currentInput = 0;
        this.operator = '';
        this.previusInput = 0;
    }

    public appendNumber(novoValor: number) {
        this.previusInput = this.currentInput;
        this.currentInput = novoValor;
    }

    public setOperator(novoOperador: string) {
        this.operator = novoOperador;
    }

    public calculate() {
        let resultado

        switch(this.operator) {
            case "+":
                resultado = (this.previusInput) + (this.currentInput)
                break;
            case "-":
                resultado = (this.previusInput) - (this.currentInput)
                break;
            case "*":
                resultado = (this.previusInput) * (this.currentInput)
                break;
            case "/":
                resultado = (this.previusInput) / (this.currentInput)
                break;
        }

        console.log(`Calculando... o resultado é ${resultado}`)
    }
}

// Soma: 5 + 3 = 8
const calcSoma = new Calculadora(0, '', 0)
calcSoma.appendNumber(5)
calcSoma.appendNumber(3)
calcSoma.setOperator('+')
calcSoma.calculate()

// Subtração: 10 - 4 = 6
const calcSub = new Calculadora(0, '', 0)
calcSub.appendNumber(10)
calcSub.appendNumber(4)
calcSub.setOperator('-')
calcSub.calculate()

// Multiplicação: 7 * 6 = 42
const calcMult = new Calculadora(0, '', 0)
calcMult.appendNumber(7)
calcMult.appendNumber(6)
calcMult.setOperator('*')
calcMult.calculate()

// Divisão: 20 / 5 = 4
const calcDiv = new Calculadora(0, '', 0)
calcDiv.appendNumber(20)
calcDiv.appendNumber(5)
calcDiv.setOperator('/')
calcDiv.calculate()
