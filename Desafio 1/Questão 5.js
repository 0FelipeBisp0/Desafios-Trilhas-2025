/* Crie uma variável idade e atribua um valor. Se a pessoa for maior de idade (18 ou mais), exiba "Você é maior de idade". Caso contrário, exiba "Você é menor de idade". */

let idade;

do {
    idade = Number(prompt("Digite a idade:"));
    
    if (isNaN(idade) || idade < 0) {
        console.log("Por favor, insira uma idade válida.");
    }
} while (isNaN(idade) || idade < 0);

if (idade >= 18) {
    console.log("Você é maior de idade!");
} else {
    console.log("Você é menor de idade!");
}
