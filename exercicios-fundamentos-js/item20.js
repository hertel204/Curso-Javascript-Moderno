// R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1
function validaQtdNota(valor, nota) {
    const resultado = {
        cont: 0,
        resto: valor
    }
    while(resultado.resto / nota >= 1) {
        resultado.resto -= nota
        resultado.cont++
    }
    return resultado
}

function notas(valor) {
    let {cont: cont100, resto: resto100} = validaQtdNota(valor, 100)    
    let {cont: cont50, resto: resto50} = validaQtdNota(resto100, 50)
    let {cont: cont10, resto: resto10} = validaQtdNota(resto50, 10)
    let {cont: cont5, resto: resto5} = validaQtdNota(resto10, 5)
    let {cont: cont1, resto: resto1} = validaQtdNota(resto5, 1)

    console.log(`
    ${cont100} nota(s) de R$ 100.
    ${cont50} nota(s) de R$ 50.
    ${cont10} nota(s) de R$ 10.
    ${cont5} nota(s) de R$ 5.
    ${cont1} nota(s) de R$ 1.`)
}

notas(1258)