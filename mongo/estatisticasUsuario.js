/* eslint-disable no-undef */
use("ecomm")

const quantidadePedido = db.orders.aggregate([
    {
        $match: {
            "account.accountId": ObjectId('647f7525ac51efb11295ebde')
        }
    },
    {
        $unwind: "$itens"
    },
    {
        $group: {
            _id: "$account.nome",
            totalQuantidade: {
                $sum: "$itens.quantidade"
            }
        }
    }
])

const totalPedido = db.orders.aggregate([
    {
        $match: {
            "account.accountId": ObjectId('647f7525ac51efb11295ebde')
        }
    },
    {
        $unwind: "$itens"
    },
    {
        $group: {
            _id: "$account.nome",
            totalPedidoSemDesconto: {
                $sum: {
                    $multiply : [
                        "$itens.quantidade",
                        "$itens.precoUnitario"
                    ]
                }
            }
        }
    }
])

const totalPedidoComDesconto = db.orders.aggregate([
    {
        $match: {
            "account.accountId": ObjectId('647f7525ac51efb11295ebde')
        }
    },
    {
        $unwind: "$itens"
    },
    {
        $group: {
            _id: "$account.nome",
            totalPedidoComDesconto: {
                $sum: {
                    $multiply : [
                        "$itens.quantidade",
                        {
                            $multiply: [
                                "$itens.precoUnitario",
                                {
                                    $subtract: [1, "$itens.desconto"]
                                }
                            ]
                        }
                    ]
                }
            }
        }
    }
])

console.log(quantidadePedido)
console.log(totalPedido)
console.log(totalPedidoComDesconto)