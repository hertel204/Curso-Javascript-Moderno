const recordes = function (string) {
    // const string = "10 20 20 8 25 3 0 30 1"

    pontos = string.split(' ')
    
    let menorPontuacao = 0
    let qtdRecordeBatidos = 0
    let recorde = parseFloat(pontos[0])
    for (i = 1; i < pontos.length; i++) {
        let pontuacaoAtual = parseFloat(pontos[i])
        
        if (pontuacaoAtual > recorde) {
            qtdRecordeBatidos++
            recorde = pontuacaoAtual
        }        

        if (pontuacaoAtual < pontos[menorPontuacao]) {
            menorPontuacao = i
        }
    }
    const retorno = [qtdRecordeBatidos, menorPontuacao+1]
    console.log(retorno)
}

anotacao = "10 20 20 8 25 3 0 30 1"
recordes(anotacao)