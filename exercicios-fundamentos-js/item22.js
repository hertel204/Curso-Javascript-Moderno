const toReal = valor => `R$${valor.toFixed(2).replace('.',',')}`

const juroComposto = (valor, taxaFixa, tempo) => valor * (1 + taxaFixa) ** tempo

const valorAnuidade = (valor, mesPagamento) => {
    const taxaFixa = 0.05
    console.log(`Valor devido: ${toReal(juroComposto(valor, taxaFixa, mesPagamento))}`)
}

valorAnuidade(100, 1)
valorAnuidade(100, 2)
valorAnuidade(100, 4)
valorAnuidade(100, 12)
