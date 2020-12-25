function Pessoa(nomePessoa) {
    let nome = nomePessoa

    this.falar = () => console.log(`Meu nome é ${nome}`)
}

const p1 = new Pessoa('Guilherme')
p1.falar()