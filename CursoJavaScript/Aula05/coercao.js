// COERÇÃO (CONVERSÃO) DE TIPOS

// - 1 . Coerção Explicita (Manual)
const numeroEmString = String(numero)
console.log(numeroEmString, typeof numeroEmString)

console.log(Number('123456'))
console.log(parseFloat('123456'))
console.log(parseInt('123456'))
console.log(Boolean('123456'))




// - 2 . Coerção Implicita (Manual)
console.log('10' + 1)
// return = 101
console.log('10' - 1)
// return = 9
console.log('10' * 1)
// return = 30
console.log(10 - 'asasa')
// return = NaN - Não é um número


// Outros Exemplos
let n = 1 + "1";
// return = 11
n = n - 1;
// return 10;
console.log(2 + 3 + 4 + "5");
// return => 95 (trata o 5 como texto)
console.log("5" + 2 + 3 + 4);
// return => 5234 (trata o 5 como texto)
console.log("10" - "4" - "3" - 2 + "5");
// return => 15