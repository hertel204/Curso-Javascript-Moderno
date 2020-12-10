const decimalParaBrl = function(valor) {
    const brl = valor.toFixed(2).replace('.', ',')
    console.log(`R$${brl}`)
}

decimalParaBrl(1.9836542)