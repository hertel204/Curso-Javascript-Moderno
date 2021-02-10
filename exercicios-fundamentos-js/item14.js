function solicitarFruta(fruta) {
    switch(fruta) {
        case 'Maçã':
            console.log('Não vendemos essa fruta aqui.')
            break;
        case 'Kiwi':
            console.log('Estamos com escassez de Kiwis.')
            break;
        case 'Melancia':
            console.log('Aqui está, são 3 reais o quilo.')
            break;
        default:
            console.log('Produto inválido.')
    }
}

solicitarFruta('Maçã')
solicitarFruta('Kiwi')
solicitarFruta('Melancia')
solicitarFruta('Outra Fruta')