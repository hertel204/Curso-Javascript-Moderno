function calculaAumento(plano, salario) {
    switch(plano) {
        case 'A':
            console.log(`Novo salário: ${salario * 1.1}.`)
            break;
        case 'B':
            console.log(`Novo salário: ${salario * 1.15}.`)
            break;
        case 'C':
            console.log(`Novo salário: ${salario * 1.2}.`)
            break;
        default:
            console.log('Categoria inválida.')
    }
}

calculaAumento('A', 1000)
calculaAumento('B', 1000)
calculaAumento('C', 1000)
calculaAumento('D', 1000)