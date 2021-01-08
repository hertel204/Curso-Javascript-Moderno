const arredondamento = function (nota = 0) {
    if (nota < 0 || nota > 100) {
        console.log('Nota inválida!')
    } else if (nota < 38) {
        console.log(`Arrendondamento não é possível. Nota = ${nota}`)
    } else if (nota % 5 === 0){
        console.log(`Arrendondamento não necessário. Nota = ${nota}`)
    } else {
        
        let i = 0
        let notaFinal = nota

        while (i < 2 && (notaFinal % 5) !== 0) {
            notaFinal++
            i++
        }
        
        if ((notaFinal % 5) !== 0) {
            console.log(`Arrendondamento não é possível. Nota = ${nota}`)

        } else {
            console.log(`Nota Final = ${notaFinal}`)
        }
    }
}

arredondamento(32)
arredondamento(38)
arredondamento(42)
arredondamento(43)
arredondamento(84)