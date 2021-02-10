Array.prototype.map2 = function (callback) {
    let retorno = []
    for (let i = 0;i < this.length;i++) {
        retorno.push(callback(this[i], i, this))
    }
    return retorno
}


const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços

const jsonToObj = json => JSON.parse(json)

const resultado = carrinho.map2(function (item) {
    itemObj = jsonToObj(item)
    return itemObj.preco
})

console.log(resultado)