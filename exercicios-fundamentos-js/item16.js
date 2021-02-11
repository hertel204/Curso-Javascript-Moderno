function calcular(valor1, operacao, valor2) {
    switch(operacao) {
        case '+':
            console.log(`${valor1} + ${valor2} = ${valor1 + valor2}`)
            break;
        case '-':
            console.log(`${valor1} - ${valor2} = ${valor1 - valor2}`)
            break;
        case '*':
            console.log(`${valor1} * ${valor2} = ${valor1 * valor2}`)
            break;
        case '/':
            console.log(`${valor1} / ${valor2} = ${valor1 / valor2}`)
            break;
        default:
            console.log('Operação inválida.')
    }
}

calcular(2, '+', 2)
calcular(2, '-', 2)
calcular(2, '*', 2)
calcular(2, '/', 2)