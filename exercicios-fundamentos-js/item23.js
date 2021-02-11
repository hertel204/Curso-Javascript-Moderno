const alunos = [
    { cod: 1, trimestre1: 7.9, trimestre2: 3.4, trimestre3: 5.2 },
    { cod: 2, trimestre1: 4.3, trimestre2: 4.5, trimestre3: 9.3 },
    { cod: 3, trimestre1: 9.4, trimestre2: 7.9, trimestre3: 7.2 },
    { cod: 4, trimestre1: 3.7, trimestre2: 4.7, trimestre3: 3.8 },
    { cod: 5, trimestre1: 6.8, trimestre2: 9.0, trimestre3: 5.2 },
    { cod: 6, trimestre1: 7.7, trimestre2: 5.8, trimestre3: 4.9 },
    { cod: 7, trimestre1: 8.1, trimestre2: 9.5, trimestre3: 8.3 },
    { cod: 8, trimestre1: 6.7, trimestre2: 7.4, trimestre3: 9.5 },
]

function boletim(alunos) {
    alunos.forEach(aluno => {
        let notas = []
        let media = 0

        notas.push(aluno.trimestre1)
        notas.push(aluno.trimestre2)
        notas.push(aluno.trimestre3)        
        notas.sort((a, b) => b - a)
        
        media = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10

        console.log(`
        Aluno: ${aluno.cod}
        Primeiro trimestre: ${aluno.trimestre1}
        Segundo trimestre: ${aluno.trimestre2}
        Terceiro trimestre: ${aluno.trimestre3}
        Média Final: ${media.toFixed(1)}`)

    });
}

boletim(alunos)