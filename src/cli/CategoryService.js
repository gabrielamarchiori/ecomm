import chalk from "chalk";

async function findCategories() {
    const response = await fetch("http://localhost:3000/categories", 
    { method: 'GET'})
    .then(response => response.json())
    .catch(error => console.log('error', error));
    console.log(`Response status: ${chalk.yellow(200)}` ,response)
}
async function findCategoryById(id) {
    const response = await fetch(`http://localhost:3000/categories/${id}`, 
    { method: 'GET'})
    .then(response => response.json())
    .catch(error => console.log('error', error));
    if(Object.keys(response).length === 0) {
        console.log(`Response status: ${chalk.yellow(404)}` ,'Essa categoria não existe')
    } else {

        console.log(`Response status: ${chalk.yellow(200)}` ,response)
    }
}
async function createCategory () {
    const response = await fetch(`http://localhost:3000/categories`, 
    { 
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: {nome: 'VESTUÁRIO', status: 'ATIVA'},
    })
    .then(response => JSON.parse(response))
    .catch(error => console.log('error', error));
    
    console.log(`Response status: ${chalk.yellow(200)}` ,response)
    
}

const categoryService = {findCategories, findCategoryById, createCategory}

console.log(await categoryService.createCategory())

export default categoryService
