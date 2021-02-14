let numeros = [1, 3, 5, 6, 8, 9, 11, 34, 56, 53, 21]

function mediaAritmetica(numeros) {
    let soma = numeros.reduce((anterior, atual) => anterior + atual)
    let media = soma/numeros.length
    console.log(media)
}

mediaAritmetica(numeros)
