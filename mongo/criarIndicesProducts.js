use("ecomm")

const criarIndice = db.products.createIndex({nome: 1, preco: 1, estoque: -1})

console.log(criarIndice)