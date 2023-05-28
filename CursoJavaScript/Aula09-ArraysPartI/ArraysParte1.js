// Arrays (Parte I)

// ARRAYS

// Como Criar um array?
let arr = ['Danilo',266, 07, true]

console.log(arr)

// Como acessar os elementos de um array
console.log('Prmeiro elemento:', arr[0])
console.log('Segundo elemento:', arr[1])
console.log('Terceiro elemento:', arr[2])
console.log('Quarto elemento:', arr[3])
// Primeiro elemento começa em 0


// Como Obter o tamanho do array
console.log('tamanho do array', arr.length)

// Percorrendo arrays
for (let i = 0; i < arr.length; i++){
    console.log(arr[i])
}

for (let elemento of arr) {
    console.log(elemento)
}

for (let variavel in arr) {
    console.log(variavel)
}