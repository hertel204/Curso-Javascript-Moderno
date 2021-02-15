// Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica 
// que recebam
// como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e 
// escreva os n termos ,
// bem como a soma dos elementos

function progAritmetica(qtdTermos, primeiroTermo, razao) {
    let pa = [primeiroTermo]
    let soma = primeiroTermo

    for(let i = 0; i < (qtdTermos - 1); i++) {
        let novoTermo = pa[i] + razao
        pa.push(novoTermo)
        soma += novoTermo        
    }
    console.log(`
    Termos: ${pa}
    Soma: ${soma}`)
}

function progGeometrica(qtdTermos, primeiroTermo, razao) {
    let pg = [primeiroTermo]
    let soma = primeiroTermo

    for(let i = 0; i < (qtdTermos - 1); i++) {
        let novoTermo = pg[i] * razao
        pg.push(novoTermo)
        soma += novoTermo        
    }
    console.log(`
    Termos: ${pg}
    Soma: ${soma}`)
}

progAritmetica(5, 5, 2)
progGeometrica(5, 5, 2)