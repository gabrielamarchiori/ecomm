import chalk from "chalk";

async function findCategories() {
    try {
        const response = await fetch("http://localhost:3000/categories", 
        { method: 'GET'})
        
        const status = response.status
        const responseData = await response.json()

        console.log(`response status: ${chalk.yellow(status)}`, responseData)
    }
    catch (error) {
        console.log(error)
    }
}

async function findCategoryById(id) {
    try {
        const response = await fetch(`http://localhost:3000/categories/${id}`, 
        { method: 'GET'})
        
        const status = response.status
        const responseData = await response.json()

        if(Object.keys(responseData).length == 0) {
            console.log(`Response status: ${chalk.yellow(status)}` ,'Essa categoria não existe')
        } 
        else {
            console.log(`Response status: ${chalk.yellow(status)}` ,responseData)
        }
    }
    catch (error) {
        console.log(error)
    }
}

async function createCategory () {
    try {
        const response = await fetch(`http://localhost:3000/categories`, 
        { 
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({nome: 'VESTUÁRIO', status: 'ATIVA'}),
        })
        
        const status = response.status
        const responseData = await response.json()
                
        console.log(`Response status: ${chalk.yellow(status)}`, responseData)

        return responseData
        
    }
    catch (error) {
        console.log(error)
    }
}

async function updateCategory (id) {
    try {
        const response = await fetch(`http://localhost:3000/categories/${id}`, 
        { 
            method: 'PATCH',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({nome: 'AUTOMÓVEIS'}),

        })
        
        const status = response.status
        const responseData = await response.json()

        console.log(`Response status: ${chalk.yellow(status)}` ,`response data:`, responseData)

        return responseData
        
    }
    catch (error) {
        console.log(error)
    }
}

async function deleteCategory (id) {
    try {
        const response = await fetch(`http://localhost:3000/categories/${id}`, 
        { method: 'DELETE'})
        
        const status = response.status
        const responseData = await response.json()

        console.log(`Response status: ${chalk.yellow(status)}` ,responseData)
        
    }
    catch (error) {
        console.log(error)
    }
}

const categoryService = {findCategories, findCategoryById, createCategory, updateCategory, deleteCategory}



export default categoryService
