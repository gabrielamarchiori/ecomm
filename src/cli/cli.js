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
        const file = args[3]
        fs.writeFileSync(file, await categoryService.createCategory() )
        .catch(error => console.log('erro', error))
    }
    if(caminho === '--atualizarCategoria'){
        const id = args[3]
        categoryService.updateCategory(id)
        .catch(error => console.log('erro', error))
    }
    if(caminho === '--excluirCategoria'){
        const id = args[3]
        categoryService.deleteCategory(id)
        .catch(error => console.log('erro', error))
    }
    
}

processarComandos(caminho);
