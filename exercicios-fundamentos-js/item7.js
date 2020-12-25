const bhaskara = function (a = 1, b = 1, c = 1) {
    // x = (-b +/- sqrt(delta))/2*a

    // delta = b**2 - 4*a*c
    delta = (b ** 2) - (4*a*c)

    if (delta < 0) {
        console.log('Delta é negativo.\n')
    } else if (delta === 0) {
        // -b/2a
        const x = b * -1/2*a
        console.log(`
        x = ${x}`)
    } else {
        // -b + sqrt(delta)/2*a
        const x1 = (b * -1 + Math.sqrt(delta))/2*a
        const x2 = (b * -1 - Math.sqrt(delta))/2*a
        console.log(`x1 = ${x1.toFixed(2)}\nx2 = ${x2.toFixed(2)}`)
    }
}

bhaskara(3, -5, 12)
bhaskara(3, 50, 12)
