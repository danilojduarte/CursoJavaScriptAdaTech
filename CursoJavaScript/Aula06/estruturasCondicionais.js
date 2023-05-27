// Estruturas Condicionais

const idade = 10;

if(idade >= 18){
    console.log('Você é maior de idade!');
} else {
    console.log('Você é menor de idade!');
}

// Se media >= 7, aprovado
// Se media < 7 e media >= , Recuperação
// Se media < 5, Reprovado;

let media = 10

if(media >= 7) {
    console.log("Aprovado!")
} else if ( media < 7 && media >= 5) {
    console.log('Recuperação')
} else {
    console.log('Reprovado(o)!')
}
