
// Exercicio 1
const cumprimentar = function(nome) {
    // console.log(`Olá, ${nome}!`)
    console.log('Olá, ' + nome + '!')
}

cumprimentar('Frederico')

// Exercicio 2
const converterIdadeEmAnosParaDias = function(idade) {
    const idadeEmDias = idade * 365
    console.log(idadeEmDias)
}

converterIdadeEmAnosParaDias(25)
// converterIdadeEmAnosParaDias(70)


// Exercicio 3
const calcularSalario = function(horas, pagamentoHora) {
    console.log(`Salário igual a R$ ${pagamentoHora * horas}`)
}

calcularSalario(150, 40.5)


// Exercicio 4
const nomeDoMes = function(numeroMes) {
    switch (Math.floor(numeroMes)) {
        case 1:
            console.log('Janeiro')
            break
        case 2:
            console.log('Fevereiro')
            break
        case 3:
            console.log('Março')
            break
        case 4:
            console.log('Abril')
            break
        case 5:
            console.log('Maio')
            break
        case 6:
            console.log('Junho')
            break
        case 7:
            console.log('Julho')
            break
        case 8:
            console.log('Agosto')
            break
        case 9:
            console.log('Setembro')
            break
        case 10:
            console.log('Outubro')
            break
        case 11:
            console.log('Novembro')
            break
        case 12:
            console.log('Dezembro')
            break
        default:
            console.log('Numero inválido')
    }
}

nomeDoMes(1)
nomeDoMes(4)
nomeDoMes(-1)


// Exercicio 5
const maiorOuIgual = function(num1, num2) {
    if (num1 >= num2){
        console.log(true)
    } else {
        console.log(false)
    }
}

maiorOuIgual(0, 0)
maiorOuIgual(0, "0")
maiorOuIgual(5, 1)