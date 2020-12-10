const operacao = function(valor1, valor2) {
    const soma = valor1 + valor2
    const subtracao = valor1 - valor2
    const multi = valor1 * valor2
    const divisao = valor1 / valor2
    console.log(`
    Operações com ${valor1} e ${valor2}:

    Soma: ${soma},
    Subtração: ${subtracao},
    Multiplicação: ${multi},
    Divisão: ${divisao}.`)
}

operacao(5, 2)