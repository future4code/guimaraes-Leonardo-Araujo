import { type } from "os"

const clientes=[
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

type Cliente={
    nome:String,
    saldoTotal:number,
    debitos:number[]
}

const possiveisClientes=(clientes:Array<object>):Array<object>=>{
    const possiveisClientes=clientes.filter((cliente:Cliente)=>{
    if(cliente.debitos){
        let debitos=0
        for(let debito of cliente.debitos){
            debitos+=debito
        }
        const saldo=(cliente.saldoTotal -debitos)
        cliente.saldoTotal=saldo
        cliente.debitos=[]
        return saldo<0
    }
    

    })
    return possiveisClientes

}
console.log(possiveisClientes(clientes))