// Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e 
// um número
// inteiro. Faça com que a primeira função retorne outro vetor que será resultado da 
// multiplicação de cada
// elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira 
// se e somente se
// o valor do elemento for maior que 5.

function multiplicaVetor(vetor, multiplicador) {
    return vetor.map(item => item * multiplicador)
}

function multiplicaVetMaior5(vetor, multiplicador) {
    return vetor.map(item => item > 5 ? item * multiplicador : item)
}

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(multiplicaVetor(vetor, 2))
console.log(multiplicaVetMaior5(vetor, 2))