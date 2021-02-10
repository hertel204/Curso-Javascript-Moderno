
// function lerArquivo (caminho) {
//     return new Promise((resolve, reject) => {
//         try {
//             const fs = require('fs')
//             console.log('Lendo arquivo...')            
//             const conteudo = fs.readFileSync(caminho, {encoding: 'utf-8'})

//             resolve(conteudo)

//         } catch (error) {
//             reject(error)
//         }

//     })
// }

// const caminhoArquivo = '/home/guilherme/Documents/curso-javascript--moderno/aulas-js/esnext/dados.txt'

// lerArquivo(caminhoArquivo)
//     .then(console.log)
//     .catch(console.log)


    function lerArquivo (pathFile) {
        return new Promise((resolve, reject) => {
                const fs = require('fs')

                console.log('Lendo arquivo...')
                // try {
                    fs.readFile(pathFile, (err, content) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(content.toString())
                        }
                    })

                // } catch (error) {
                //     reject(error)
                // }

        })
    }
    
    const caminhoArquivo = '/home/guilherme/Documents/curso-javascript--moderno/aulas-js/esnext/dados.txt'
    
    lerArquivo(caminhoArquivo)
        .then(console.log)
        .catch(err => console.log(`Ocorreu o seguinte erro: ${err}`))