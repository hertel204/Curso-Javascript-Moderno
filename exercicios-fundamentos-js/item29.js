
let numeros = [1, 3, 5, 6, 8, 9, 11, 34, 56, 53, 21]

function dentroOuFora(numeros) {
    let fora = 0
    let dentro = 0

    for(let i = 0; i < numeros.length; i++) {
        if(numeros[i] >= 10 && numeros[i] <= 20){
            dentro += 1
        } else {
            fora += 1
        }
    }
    console.log(`${dentro} número(s) está(ão) dentro e ${fora} número(s) está(ão) fora do intervalo.`)
}

dentroOuFora(numeros)