// Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
// primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
// Faça a troca sem utilizar uma variável auxiliar.

function trocaVetores(vetorA, vetorB) {
    [vetorA, vetorB] = [vetorB, vetorA]
    console.log(vetorA, vetorB)    
}

const vetorA = ['a1', 'a2', 'a3', 'a4']
const vetorB = ['b1', 'b2', 'b3', 'b4']
trocaVetores(vetorA, vetorB)