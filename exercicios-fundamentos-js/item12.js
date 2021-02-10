function fatorialDe(valor) {
    let resultado = valor
    for (let i = valor - 1; i >= 1; i--) {
        resultado *= i
        console.log(`${resultado / i} * ${i} = ${resultado}`)
    }
    console.log(resultado)
}

fatorialDe(3)
fatorialDe(10)