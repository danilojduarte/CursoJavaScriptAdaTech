// Estruturas de Repetição | Laços Condicionais

const input = require('readline-sync')

const numeroSorteado = 5;

let numero = Number (input.question('Qual numero?'))
console.log(numero, typeof numero)

while (numero !== numeroSorteado) {
    console.log('Você errou. Tente novamente...')

    numero = Number( input.question('Qual numero escolhe?'))
}

console.log('Vc acertou!')