/* Crie um loop que peça ao usuário para digitar um número até que ele digite o número 5. */
let numero;

while (true) { 
    numero = prompt("Numero Secreto. Digite um número:"); 

    if (numero == 5) { 
        console.log("Você digitou 5. Acertou!!");
        break;
    } else {
        console.log("Tente novamente.");
    }
}