// function imprime(valor) {
//     console.log(valor)
// }

// imprime('Hello World!')


const geraValorAleatorio = function (min, max) {
    const retorno = Math.random() * (max - min) + min
    return Math.floor(retorno)
}

console.log(geraValorAleatorio(0, 10))
// geraValorAleatorio(3, 10)

