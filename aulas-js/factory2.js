function criarProduto(nome = 'Genérico', preco = 10) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto())
console.log(criarProduto('carro', 50000))