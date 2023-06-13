import chalk from 'chalk';
import fs from 'fs'

function trataErro(erro) {
    console.log(erro)
    throw new Error(erro.code, 'Não há arquivo no diretório')
}

function imprimeLista(resultado, identificador='') {
    console.log(
        `Response status:${chalk.yellow('200')}`,
        chalk.green(resultado)
    )
}

async function pegaDb(caminhoDoArquivo) {
    try {
        const encoding = 'utf-8';
        const dataBase = await fs.promises.readFile(caminhoDoArquivo, encoding)
        return dataBase
    }
    catch (erro) {
        trataErro(erro)
    }
}
const caminho = process.argv

async function processarComando(argumentos) {
    const caminho = argumentos[2]

    try{
        fs.lstat(caminho)
    } catch (erro) {
        if(erro.code === 'ENOENT') {
            console.log('arquivo ou diretório não existe')
            return
        }
    }

    if(fs.lstatSync(caminho).isFile()) {
        const resultado = await pegaDb(argumentos[2])
        imprimeLista(resultado)
    } else if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho)
        arquivos.forEach(async (nomeDoArquivo) => {
            const lista = await pegaDb(`${caminho}/${nomeDoArquivo}`)
            imprimeLista(lista, nomeDoArquivo)
        })
    }


}

// console.log(await pegaDb('./src/cli/db.json'))
processarComando(caminho)