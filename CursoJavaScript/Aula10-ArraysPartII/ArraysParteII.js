// Arrays (Parte II)
const arr1 = [30, 12, 45, 34, 29]
const arr2 = []
// Fatiamento: slice
console.log(arr1.slice(0, 2))
console.log(arr1.slice(2))

// Adicionando elementos: push | unshift
console.log('Antes de add', arr2)

arr2.push(10, 20, 30)
arr2.push(40)

// Adicionando elemento na primeira posição

arr2.unshift(0)

// Removendo elementos: pop | shift

arr2.pop() 
// pop remove o ultimo elemento

// removendo o primeiro elemento
arr2.shift()

// Concatenando arrays: concat

console.log(arr1.concat(arr2))

// Buscando elementos: indexOf | lastIndexof

let indiceElemento = arr1.indexOf(34)

// retorno = 3

let arr3 = [1, 2, 3, 3, 5, 3]

console.log(arr3.lastIndexOf(3))

// return 5


// Descobrindo a existencia de um elemento em arry:

console.log(arr1.includes(10))
// return - false

// Invertando arrays : reverse

const arr1.reverse()

var array = [2, 5, 9];
console.log(array.indexOf(2));
console.log(array.indexOf(7));
console.log(array.indexOf(9, 2));


function funcao(array) {
    let acc = 0;
  
    for (let elemento of array) {
      acc += elemento;
    }
  
    return (acc / array.length);
  }
  
  console.log(funcao([4, 6, 4, 2]));