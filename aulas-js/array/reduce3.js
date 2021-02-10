Array.prototype.reduce2 = function (callback, inicial) {
    let ultimo = undefined

    if (inicial == undefined) {
        ultimo = this[0]

        for (let i = 1;i < this.length;i++){
            ultimo = callback(ultimo, this[i], i, this)
        }
    } else {
        ultimo = inicial
        
        for (let i = 0;i < this.length;i++) {
            ultimo = callback(ultimo, this[i], i, this)
        }
    }
    return ultimo

}


const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

const contador = alunos.map(e => e.bolsista).reduce2(function(cont, atual) {
    console.log(`${cont}, ${atual}`)
    if (atual == true) {
    cont++
    }
    return cont
}, 0)

//  Desafio 1: todos os alunos são bolsistas?


console.log(contador === alunos.length)


// Desafio 2: Algum aluno é bolsista?

console.log(contador > 0)