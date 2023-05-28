// Objetos

// Como criar um objeto
let pessoa = {
    nome:'Danilo',
    idade: 38,
}

console.log(pessoa)

console.log(pessoa.nome)

// Como add um par de chaves-valor

pessoa.altura = 1.77

console.log(pessoa)

// Como remover um par de chaves-valor

delete pessoa.altura

console.log(pessoa)

// Como percorrer

for (let chave in pessoa) {
    console.log(chave)
}