// Funções

function saudacao(){
    console.log('Olá, seja bem vinda!')
}

// Chamando function
saudacao();

// Como enviar parametros p/ functio

function saudacao(nome, curso){
    console.log(`Olá ${nome}, seja bem vinda a ${curso}!`)
}

saudacao('danilo', 'Js')


// Valor padrão
function saudacao(nome, curso='js'){
    console.log(`Olá ${nome}, seja bem vinda a ${curso}!`)
}

saudacao('danilo')

// Quando o parametro não e passado, e retornado underfind

// Retorno da funcao

function soma(n1, n2){
    return n1 + n2
}

const resultado = soma(10, 20)

console.log(resultado / 2)