use("ecomm")

const criarIndice = db.products.createIndex({nome: 1})

console.log(criarIndice)