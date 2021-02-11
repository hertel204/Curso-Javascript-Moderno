const toReal = valor => `R$${valor.toFixed(2).replace('.',',')}`

function valorLanche(codigoProduto, qtdProduto) {

    switch(codigoProduto) {
        case 100:
            console.log(toReal(3 * qtdProduto))
            break;
        case 200:
            console.log(toReal(4 * qtdProduto))
            break;
        case 300:
            console.log(toReal(5.5 * qtdProduto))
            break;
        case 400:
            console.log(toReal(7.5 * qtdProduto))
            break;
        case 500:
            console.log(toReal(3.5 * qtdProduto))
            break;
        case 600:
            console.log(toReal(2.8 * qtdProduto))
            break;
        default:
            console.log('Produto indisponível.')
    }
}

valorLanche(100, 3)