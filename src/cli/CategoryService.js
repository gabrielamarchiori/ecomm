import chalk from "chalk";

console.log('to funcionando')


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
    console.log(`Response status: ${chalk.yellow(200)}` ,response)
}

const categoryService = {findCategories, findCategoryById}

export default categoryService
