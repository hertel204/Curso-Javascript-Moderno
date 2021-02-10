function ehBissexto (ano) {
    if ((ano % 4 === 0) && ((ano % 100 !== 0) || (ano % 400 === 0))) {
        console.log(true)
    } else {
        console.log(false)
    }
}

ehBissexto(1)
ehBissexto(3)
ehBissexto(4)
ehBissexto(8)
ehBissexto(16)
ehBissexto(100)
ehBissexto(200)
ehBissexto(400)
ehBissexto(800)