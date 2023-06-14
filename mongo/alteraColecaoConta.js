use("ecomm")

const alterarConta = db.runCommand({collMod: "accounts",
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
                    pattern: "^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
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
                    pattern: "[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}",
                    description: "Informe corretamente o CPF do usuário"
                },
                telefone: {
                    bsonType: "string",
                    pattern: "([0-9]{4,5})([0-9]{4})",
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
                            pattern: "^(\\d+|S/N)$",
                            description: "Informe corretamente o número do usuário"
                        },
                        complemento: {
                            bsonType: "string",
                        },
                        cep: {
                            bsonType: "string",
                            pattern: "^[0-9]{8}$",
                            description: "Informe corretamente o CEP do usuário"
                        },
                        cidade: {
                            bsonType: "string",
                            minLength: 5,
                            description: "Informe corretamente a cidade do usuário"
                        },
                        uf: {
                            bsonType: "string",
                            pattern: "^(\s*(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO)?)$" ,
                            description: "Informe corretamente o UF do usuário"
                        }
                    }
                }
            }

        }
    }
})