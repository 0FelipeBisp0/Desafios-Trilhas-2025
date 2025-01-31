/* Escreva um código que calcule a área de um círculo. Utilize uma função para realizar o cálculo. A função deve receber o raio como parâmetro e retornar a área. */

function calculaAreaCirculo(raio) {
    let pi = 3.14;
    let area = pi * (raio * raio);
    return area;
}

let raio = Number(prompt("Qual o raio do circulo que deseja calcular?"));
let area = calculaAreaCirculo(raio);
console.log ("Área é:", area);
