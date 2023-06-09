use("ecomm")

const insertOrders = [
    {
        "dataPedido": new Date(2023, 05, 31),
        "account": {
            "accountId" : ObjectId('647f7525ac51efb11295ebde'),
            "nome": "Wyozu"
        },
        "enderecoEntrega": {
            "bairro": "Maria das Graças",
            "rua": "Rua Exaltina Rocha Zon",
            "numero": "20",
            "complemento": "Apt. 501",
            "cep": "29705017",
            "cidade": "Colatina",
            "uf": "ES"
        },
        itens: [{
            "productId": ObjectId('6479dfc1dea0c9b90268bbfe'),
            "quantidade": 1 ,
            "desconto": 0.15,
            "precoUnitario": NumberDecimal(3523)
        }]
    },
    {
        "dataPedido": new Date(2023, 06, 07),
        "account": {
            "accountId" : ObjectId('647f7525ac51efb11295ebdf'),
            "nome": "Meriel"
        },
        "enderecoEntrega": {
            "bairro": "Pedrinhas",
            "rua": "RRua José de Alencar",
            "numero": "234",
            "cep": "29705017",
            "cidade": "Porto Velho",
            "uf": "RO"
        },
        itens: [{
            "productId": ObjectId('6479dfc1dea0c9b90268bc02'),
            "quantidade": 3 ,
            "desconto": 0.35,
            "precoUnitario": NumberDecimal(9176)
        }]
    },
    {
        "dataPedido": new Date(2023, 06, 09),
        "account": {
            "accountId" : ObjectId('647f7525ac51efb11295ebde'),
            "nome": "Wyozu"
        },
        "enderecoEntrega": {
            "bairro": "Maria das Graças",
            "rua": "Rua Exaltina Rocha Zon",
            "numero": "20",
            "cep": "29705017",
            "cidade": "Colatina",
            "uf": "ES"
        },
        itens: [{
            "productId": ObjectId('6479dfc1dea0c9b90268bc02'),
            "quantidade": 2 ,
            "desconto": 0.35,
            "precoUnitario": NumberDecimal(9176)
        }]
    },
    {
        "dataPedido": new Date(2023, 06, 07),
        "account": {
            "accountId" : ObjectId('647f7525ac51efb11295ebdf'),
            "nome": "Meriel"
        },
        "enderecoEntrega": {
            "bairro": "Pedrinhas",
            "rua": "RRua José de Alencar",
            "numero": "234",
            "cep": "29705017",
            "cidade": "Porto Velho",
            "uf": "RO"
        },
        itens: [{
            "productId": ObjectId('6479dfc1dea0c9b90268bc03'),
            "quantidade": 3 ,
            "desconto": 0.35,
            "precoUnitario": NumberDecimal(1889)
        }]
    }

    
]

const allOrders = db.orders.insertMany(insertOrders)

console.log(allOrders)