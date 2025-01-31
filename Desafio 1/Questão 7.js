/*Crie duas variáveis, numero1 e numero2, e atribua valores a elas. Verifique se os dois números são iguais e, caso sejam, exiba "Os números são iguais". Caso contrário, exiba "Os números são diferentes".*/

let num1 = Number(prompt("Digite um número:")); 
let num2 = Number(prompt("Digite outro número:")); 
let verifica = num1 - num2;
if (verifica === 0) {
    console.log("Os números são iguais!")
} else {
    console.log("Os números são diferentes!")
}
