const vetorInteiro = [ 1, 2, 5, 7]
const vetorString = [ 'Maça', 'Banana', 'Uva', 'Melancia']
const vetorDouble = [ 1.1, 2.2, 3.3, 4.4]
let vetorConcat1 = []
let vetorConcat2 = []

vetorConcat1 = Array.prototype.concat(vetorInteiro, vetorString, vetorDouble)
vetorConcat2 = vetorInteiro.concat(vetorString, vetorDouble)
console.log(vetorConcat1, vetorConcat2)