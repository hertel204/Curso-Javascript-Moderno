const recordes = function (string) {
    // const string = "10 20 20 8 25 3 0 30 1"

    pontos = string.split(' ')
    
    let menor = 0
    let contRecorde = 0
    let recorde = parseFloat(pontos[0])
    for (i = 1; i < pontos.length; i++) {
        let atual = parseFloat(pontos[i])
        
        if (atual > recorde) {
            contRecorde++
            recorde = atual
        }        

        if (atual < pontos[menor]) {
            menor = i
        }
    }
    const retorno = [contRecorde, menor+1]
    console.log(retorno)
}

anotacao = "10 20 20 8 25 3 0 30 1"
recordes(anotacao)