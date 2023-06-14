import categoryService from "./CategoryService.js"

const caminho = process.argv;

async function processarComandos(args) {
    const caminho = args[2];
    
    switch (caminho) {
        case "--listarCategorias":
            try {
                await categoryService.findCategories();
            } catch (error) {
                console.log("erro:", error);
            }
            break;
    }
    switch (caminho) {
        case "----recuperarCategoriaPorId":
            try {
                await categoryService.findCategoryById();
            } catch (error) {
                console.log("erro:", error);
            }
            break;
    }
}

processarComandos(caminho);
