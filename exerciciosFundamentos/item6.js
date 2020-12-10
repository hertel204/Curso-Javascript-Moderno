const juroSimples = function(capInicial = 1, txJuros = 0, tempoAplicacao = 1) {
    const montante = capInicial * (1 + (tempoAplicacao / 365) * txJuros)
    console.log(`Montante com juro simples: ${montante}.`)
}

const juroComposto = function(capInicial = 1, txJuros = 0, tempoAplicacao = 1) {
    let montanteFor = capInicial

    // Resultado usando For
    for (i = 0; i < tempoAplicacao; i++) {
        montanteFor = montanteFor * (1 + txJuros / 365)
    }
    console.log(`Montante com juro composto usando For: ${montanteFor}.`)

    // Resultado usando Formula
    const montanteFormula = capInicial * (1 + txJuros / 365) ** tempoAplicacao
    console.log(`Montante com juro composto usando Formula: ${montanteFormula}.`)
}


juroSimples(500000, 0.02, 365)
juroSimples(500000, 0.02, 1460)
juroComposto(500000, 0.02, 365)
juroComposto(500000, 0.02, 1460)