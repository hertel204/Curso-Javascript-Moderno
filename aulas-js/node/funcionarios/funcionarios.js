// npm init -y
// npm i axios (instala o modulo axios na última versão disponível)
// npm i axios@x.x.x -E (instala o modulo axios na versão determinada)


const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios)
    // Mulher chinesa com menor salário

    const filtraMulher = f => f.genero === 'F'
    const filtraChinesa = f => f.pais === 'China'
    const menorSalario = (func, funcAtual) => {
        return funcAtual.salario < func.salario ? funcAtual : func
    }
    const resultado = funcionarios
        .filter(filtraMulher)
        .filter(filtraChinesa)
        .reduce(menorSalario)
    console.log(resultado)

})