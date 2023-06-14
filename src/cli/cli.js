import categoryService from "./CategoryService.js"

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
         categoryService.createCategory()
        .catch(error => console.log('erro', error))
    }
    
}

processarComandos(caminho);
