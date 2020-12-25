const tipoDeTriangulo = function(lado1 = 1, lado2 = 1, lado3 = 1) {
    if ((lado1 === lado2) && (lado2 === lado3)) {
        console.log('Triângulo Equilátero.')
    } else if ((lado1 === lado2) || (lado2 === lado3) || (lado1 === lado3)) {
        console.log('Triângulo Isósceles.')
    } else {
        console.log('Triângulo Escaleno.')
    }
}

tipoDeTriangulo()
tipoDeTriangulo(3, 3, 3)
tipoDeTriangulo(2, 2, 3)
tipoDeTriangulo(2, 3, 3)
tipoDeTriangulo(2, 3, 2)
tipoDeTriangulo(1, 2, 3)