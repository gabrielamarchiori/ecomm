import process from 'node:process'
import categoryService from "./CategoryService.js"
import fs from 'fs'

const caminho = process.argv;
console.log(caminho)

async function processarComandos(args) {
    const caminho = args[2];

    if (caminho === '--listarCategorias') {
        categoryService.findCategories()
        .catch(error => console.log('erro', error))
    }
    
    if(caminho === '--recuperarCategoriaPorId' && args[3]){
        const id = args[3]
        categoryService.findCategoryById(id)
        .catch(error => console.log('erro', error))
    }
    
    if(caminho === '--inserirCategoria'){
        try {
            const file = args[3]
            const response = await categoryService.createCategory()
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
            const response = await categoryService.updateCategory(id)
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
        categoryService.deleteCategory(id)
        .catch(error => console.log('erro', error))
    }
    
}

processarComandos(caminho);
