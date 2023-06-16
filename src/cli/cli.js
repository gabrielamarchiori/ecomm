import process from 'node:process'
import CategoryService from './CategoryService.js';
import fs from 'fs'

const caminho = process.argv;

async function processarComandos(args) {
    const caminho = args[2];

    if (caminho === '--listarCategorias') {
        CategoryService.findCategories()
        .catch(error => console.log('erro', error))
    }
    
    if(caminho === '--recuperarCategoriaPorId' && args[3]){
        const id = args[3]
        CategoryService.findCategoryById(id)
        .catch(error => console.log('erro', error))
    }
    
    if(caminho === '--inserirCategoria'){
        try {
            const file = args[3]
            const response = await CategoryService.createCategory()
            const myData = JSON.stringify(response)
            fs.writeFileSync(file, myData)
        }
        catch (erro) {
            console.log(erro)
        }
    }
    
    if(caminho === '--atualizarCategoria'){
        try {
            const id = args[3]
            const file = args[4]
            const response = await CategoryService.updateCategory(id)
            console.log(response)
            const myData = JSON.stringify(response)
            fs.writeFileSync(file, myData)
        }
        catch (erro) {
            console.log(erro)
        }
    }
    
    if(caminho === '--excluirCategoria'){
        const id = args[3]
        CategoryService.deleteCategory(id)
        .catch(error => console.log('erro', error))
    }
}

processarComandos(caminho);
