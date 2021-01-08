const divisorDe3 = function (numero = 1) {
    if (numero % 3 === 0) {
        return true
    } else {
        return false
    }
}

console.log(divisorDe3(3))
console.log(divisorDe3(4))