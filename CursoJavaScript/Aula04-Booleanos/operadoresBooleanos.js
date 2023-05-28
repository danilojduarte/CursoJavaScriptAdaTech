// Operadores Booleanos

// Igualdade : == (ou ===)
// Desigualdade : != (ou !==)
// Maior que : >
// Maior ou igual >=
// Menor que : <
// Menor ou igual <=
// 
// Conjuções Lógicas

// and => &&
let idade = 26
let cnh = true;
const possoDirigir = idade >= 18 && cnh == true
//OR => ||
idade = 40;
const voto = idade < 18 || idade >=70;
//NOT => !
const gostoCurso = false;

console.log(!gostoCurso)

const numero = 10

console.log(numero == "10")
// JavaScript entende que sim, é um número mesmo sendo string
// Compara tipos de variaveis, utilizar (===);


0 <= 0
1 < 1
-2 > -22
-22 > 0