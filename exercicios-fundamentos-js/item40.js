// Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
// modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
// conceito B e de 9,0 a 10,0 o conceito A.

function conceitoNotas(notas = []) {
    let conceitos = notas.map(nota => {
        if(nota >= 0 && nota <= 10) {
            if(nota < 5) {
                return 'D'
            } else if(nota < 7) {
                return 'C'
            } else if(nota < 9) {
                return 'B'
            } else {
                return 'A'
            }
        } else {
            return 'Nota inválida'
        }
    })
    console.log(conceitos)
}

conceitoNotas([9.0, 3.7, 6.2, 7.4])
conceitoNotas([9.0, 30.7, 6.2, -7.4])