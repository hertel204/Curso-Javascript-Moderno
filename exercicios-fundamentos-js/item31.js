
let numeros = [-1, -3, 5, -6, 8, 9, -11, 34, 56, -53, 21]

function positivoOunegativo(numeros) {
    let positivo = 0
    let negativo = 0

    for(let i = 0; i < numeros.length; i++) {
        if(numeros[i] >= 0){
            positivo += 1
        } else {
            negativo += 1
        }
    }
    console.log(`${positivo} número(s) é/são positivo(s) e ${negativo} número(s) é/são negativo(s).`)
}

positivoOunegativo(numeros)