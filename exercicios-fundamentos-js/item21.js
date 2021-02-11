const toReal = valor => `R$${valor.toFixed(2).replace('.',',')}`

function valorPlano(idade) {
    const taxaFixa = 100

    if ((0 <= idade) && (idade < 10)) {
        console.log(`Valor total ${toReal(taxaFixa + 80)}`)
    } else if ((10 <= idade) && (idade <= 30)) {
        console.log(`Valor total ${toReal(taxaFixa + 50)}`)
    } else if ((30 < idade) && (idade <= 60)) {
        console.log(`Valor total ${toReal(taxaFixa + 95)}`)
    } else {
        console.log(`Valor total ${toReal(taxaFixa + 130)}`)        
    }
}

valorPlano(0)
valorPlano(5)
valorPlano(10)
valorPlano(20)
valorPlano(30)
valorPlano(60)
valorPlano(61)