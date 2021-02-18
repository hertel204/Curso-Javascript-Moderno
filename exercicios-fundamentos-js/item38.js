// Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir 
// todos os números
// ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 
// 100 para fim. Atente
// para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.

function imparesEntre(menor = 0, maior = 100) {
    let resultado = []

    if(menor > maior) [menor, maior] = [maior, menor]

    for(i = menor; i <= maior; i++) {
        if(i % 2 !== 0) resultado.push(i)
    }
    console.log(resultado)
}

imparesEntre(30, 10)