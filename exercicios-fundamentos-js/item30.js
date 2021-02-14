
let numeros = [1, 3, 5, 6, 8, 9, 11, 34, 56, 53, 21]

function maiorEMenor(numeros) {
    let maior = 0
    let menor = 0

    maior = numeros.reduce((anterior, atual) => atual >= anterior ? atual : anterior)
    menor = numeros.reduce((anterior, atual) => atual <= anterior ? atual : anterior)
    
    console.log(`
    Maior: ${maior}
    Menor: ${menor}`)
}

maiorEMenor(numeros)