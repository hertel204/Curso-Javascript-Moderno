const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

const contador = alunos.map(e => e.bolsista).reduce(function(cont, atual) {
    if (atual == true) {
        cont++
    }
    return cont
}, 0)

//  Desafio 1: todos os alunos são bolsistas?


console.log(contador === alunos.length)


// Desafio 2: Algum aluno é bolsista?

console.log(contador > 0)
