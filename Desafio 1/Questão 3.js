/* Crie uma variável chamada preco com o valor 50 e uma variável desconto com o valor 0.2 (20%). Calcule o preço com desconto e exiba o valor final. */
let preco = 50;
let desconto = 0.2;
let precoFinal = preco * (1 - desconto);
console.log(`Valor com desconto é R$ ${precoFinal.toFixed(2)}`);
