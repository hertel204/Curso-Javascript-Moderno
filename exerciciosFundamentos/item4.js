const divisaoEResto = function(dividendo, divisor) {
    const resultado = Math.floor(dividendo / divisor)
    const resto = dividendo % divisor
    console.log(`
    Resultado = ${resultado}
    Resto = ${resto}`)
}

divisaoEResto(17, 3)