use("ecomm")

db.createCollection("orders", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            additionalProperties: false,
            required: ["_id", "dataPedido"],
            properties: {
                _id: {
                    bsonType: 'objectId',
                    description: 'informe corretamente o id do pedido'
                  },
                  dataPedido: {
                    bsonType: "date",
                    description: "Informe corretamente a data do pedido"
                },
                
                account: {
                    bsonType: "object",
                    required: ["accountId", "nome"],
                    properties: {
                        accountId: {
                            bsonType: "objectId",
                            description: "Informe corretamente o id do usuário"
                        },
                        nome: {
                            bsonType: "string",
                            minLength: 5,
                            description: "Informe corretamente o nome do usuário"
                        }
                    }
                },
                enderecoEntrega : {
                    bsonType: "object",
                    required: ["bairro", "rua", "numero", "cep", "cidade", "uf"],
                    properties: {
                        bairro: {
                            bsonType: "string",
                            minLength: 1,
                            description: "Informe corretamente o bairro do usuário"
                        },
                        rua: {
                            bsonType: "string",
                            minLength: 1,
                            description: "Informe corretamente a rua do usuário"
                        },
                        numero: {
                            bsonType: "string",
                            minLength: 1,
                            description: "Informe corretamente o número do usuário"
                        },
                        complemento: {
                            bsonType: "string",
                        },
                        cep: {
                            bsonType: "string",
                            minLength: 8,
                            maxLength: 8,
                            description: "Informe corretamente o CEP do usuário"
                        },
                        cidade: {
                            bsonType: "string",
                            minLength: 5,
                            description: "Informe corretamente a cidade do usuário"
                        },
                        uf: {
                            bsonType: "string",
                            minLength: 2,
                            maxLength: 2,
                            description: "Informe corretamente o UF do usuário"
                        }
                    }
                }, itens : {
                    bsonType: "array",
                    required: ["productId", "quantidade", "precoUnitario" ],
                    properties: {
                        productId : {
                            bsonType: 'objectId',
                            description: "Informe corretamente o id do produto"
                        },
                        quantidade: {
                            bsonType: 'int',
                            minimum: 1,
                            description: "Informe corretamente a quantidade do produto"
                        },
                        desconto: {
                            bsonType: 'decimal',
                            minimum: 0,
                            exclusiveMinimum: true,
                            description: "Informe corretamente o desconto do produto"
                        },
                        precoUnitario: {
                            bsonType: 'decimal',
                            minimum: 0,
                            exclusiveMinimum: true,
                            description: "Informe corretamente o preço do produto"
                        }
                    }
                }
            }

        }
    }
})

