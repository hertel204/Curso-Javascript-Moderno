const meuObjetoArray = [{
    nome: 'Guilherme',
    sobrenome: 'Hertel',
    idade: 25,
    altura: 174
},
{
    nome: 'Frederico',
    sobrenome: 'Hertel',
    idade: 67,
    altura: 176
},
{
    nome: 'Midori',
    sobrenome: 'Hertel',
    idade: 70,
    altura: 153
}]


console.log(meuObjetoArray.filter(m => m.idade < 70))