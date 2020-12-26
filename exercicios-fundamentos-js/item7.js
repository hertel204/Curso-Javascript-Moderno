const bhaskara = function (a = 1, b = 1, c = 1) {
    // x = (-b +/- sqrt(delta))/2*a
    let result = []
    // delta = b**2 - 4*a*c
    delta = (b ** 2) - (4*a*c)

    if (delta < 0) {
        console.log('Delta é negativo.')
    } else if (delta === 0) {
        // -b/2a
        const x = b * -1/2*a
        result.push(x.toFixed(2))  
    } else {
        // -b + sqrt(delta)/2*a
        const x1 = (b * -1 + Math.sqrt(delta))/2*a
        const x2 = (b * -1 - Math.sqrt(delta))/2*a
        result.push(x1.toFixed(2), x2.toFixed(2))
        console.log(result)
    }
}

bhaskara(3, -5, 12)
bhaskara(3, 50, 12)
