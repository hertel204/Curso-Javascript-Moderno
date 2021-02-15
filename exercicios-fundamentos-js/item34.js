const string1 = 'Carro'
const string2 = 'Roca'

function validaLetras(string1, string2) {
    let temLetras = true
    let letras = string1.split('').concat(string2.split(''))
    letras = letras
        .map(item => item.toLowerCase())
        .filter((item, index, array) => index === array.indexOf(item))

    letras.forEach(valor => {
        console.log(`Letra ${valor} na string1: ${string1.toLowerCase().indexOf(valor)}`)
        console.log(`Letra ${valor} na string2: ${string2.toLowerCase().indexOf(valor)}`)
        if(string1.toLowerCase().indexOf(valor) < 0 || string2.toLowerCase().indexOf(valor) < 0) {
            temLetras = false
        }
    })
    console.log(temLetras)
}

validaLetras(string1, string2)