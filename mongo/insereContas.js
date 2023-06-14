use("ecomm")

const insertAccounts = ([
    {
        "nome": "Wyozu",
        "email": "wyozu@mail.com",
        "senha": "12345",
        "dataCriacao": new Date(2023, 04, 16),
        "cpf": "38023356003",
        "telefone": "948370987",
        "endereco": {
            "bairro" : "Maria das Graças",
            "rua": "Rua Exaltina Rocha Zon",
            "numero": "20",
            "complemento": "Apt. 501",
            "cep": "29705017",
            "cidade": "Colatina",
            "uf": "ES"
        }
    },
    {
        "nome": "Meriel",
        "email": "meriel@mail.com",
        "senha": "12345", 
        "dataCriacao": new Date(2023, 05, 21),
        "cpf": "32233080084",
        "telefone": "989684355",
        "endereco": {
            "bairro" : "Pedrinhas",
            "rua": "Rua José de Alencar",
            "numero": "234",
            "cep": "76801454",
            "cidade": "Porto Velho",
            "uf": "RO"
        }
    },
    {
        "nome": "Lulis",
        "email": "luli@mail.com",
        "senha": "12345",
        "dataCriacao": new Date(2023, 06, 06),
        "cpf": "83785782080",
        "telefone": "989046777",
        "endereco": {
            "bairro" : "Quarta Parada",
            "rua": "Rua Iperana",
            "numero": "56",
            "complemento": "Apt.902",
            "cep": "03177090",
            "cidade": "São Paulo",
            "uf": "SP"
        }
    }
])

const allAccounts = db.accounts.insertMany(insertAccounts)

console.log(allAccounts)