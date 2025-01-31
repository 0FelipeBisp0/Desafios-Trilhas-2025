/* Refatore o código abaixo para que seja mais legível, usando boas práticas de nomenclatura e separando o código em funções:

x = 10

y = 20

z = x+y

console.log(z) */

function somar(num1, num2) {
    return num1 + num2;
}

let primeiroNumero = 10;
let segundoNumero = 20;

let resultadoSoma = somar(primeiroNumero, segundoNumero);

console.log(`O resultado da soma é ${resultadoSoma}`);