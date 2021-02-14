
function anosParaPassar(alturaMenor, taxaMaior, alturaMaior, taxaMenor) {
    let aproximacaoAnual = taxaMaior - taxaMenor
            
    return Math.ceil((alturaMaior - alturaMenor) / aproximacaoAnual)
}


function alturas(altura1, taxaAnual1, altura2, taxaAnual2) {
    if(altura1 < altura2) {        
        console.log('A criança 1 é menor que a criança 2.')

        if(taxaAnual1 > taxaAnual2) {
            console.log(`A criança 1 passará a criança 2 em ${anosParaPassar(altura1, taxaAnual1, altura2, taxaAnual2)} anos.`)
        } else {
            console.log('A criança 1 nunca passará a criança 2.')
        }
    } else if(altura2 < altura1) {        
        console.log('A criança 2 é menor que a criança 1.')

        if(taxaAnual2 > taxaAnual1) {
            console.log(`A criança 2 passará a criança 1 em ${anosParaPassar(altura2, taxaAnual2, altura1, taxaAnual1)} anos.`)
        } else {
            console.log('A criança 2 nunca passará a criança 1.')
        }
    } else {
        console.log('As crianças têm a mesma altura.')
    }
}

alturas(70, 10, 80, 7)
console.log('\n')
alturas(80, 7, 70, 10)
console.log('\n')
alturas(70, 6, 80, 7)
console.log('\n')
alturas(70, 10, 70, 7)