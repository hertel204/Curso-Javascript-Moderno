let numeros = [1, 3, 5, 6, 8, 9, 11, 34, 56, 53, 21]

function parOuImpar(numeros) {
    let impar = 0
    let par = 0

    for(let i = 0; i < numeros.length; i++) {
        if(numeros[i] % 2 === 0){
            par += 1
        } else {
            impar += 1
        }
    }
    console.log(`${par} números são pares e ${impar} números são impares.`)
}

parOuImpar(numeros)