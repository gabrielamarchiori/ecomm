use("ecomm")

db.createCollection("accounts", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            additionalProperties: false,
            required: ["_id","nome", "email", "senha", "dataCriacao", "cpf", "telefone", "endereco"],
            properties: {
                _id: {
                    bsonType: 'objectId',
                    description: 'informe corretamente o id da conta'
                  },
                nome: {
                    bsonType: "string",
                    minLength: 5,
                    description: "Informe corretamente o nome do usuário"
                },
                email: {
                    bsonType: "string",
                    minLength: 5,
                    description: "Informe corretamente o e-mail do usuário"
                },
                senha: {
                    bsonType: "string",
                    minLength: 5,
                    description: "Informe corretamente a senha do usuário"
                },
                dataCriacao: {
                    bsonType: "date",
                    description: "Informe corretamente a data de criação do usuário"
                },
                cpf: {
                    bsonType: "string",
                    description: "Informe corretamente o CPF do usuário"
                },
                telefone: {
                    bsonType: "string",
                    description: "Informe corretamente o telefone do usuário"
                },
                endereco: {
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
                }
            }

        }
    }
})

