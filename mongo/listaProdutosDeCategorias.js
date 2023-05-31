use("ecomm")

const produtoCategoria = db.products.find({"categoria": {$in:["LIVROS", "CELULARES"]}})

console.log(produtoCategoria)