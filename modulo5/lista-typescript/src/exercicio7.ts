const estoque=[
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]
type Produto={
    nome:string,
    quantidade:number,
    valorUnitario:number | string
}


const ajustaPreco = (estoque:Produto[]): Produto[] => {
    const precosAjustados=estoque.map((produto:Produto):Produto=>{
        const valorAjustado:string = (Number(produto.valorUnitario).toFixed(2).replace('.', ','))
        produto.valorUnitario=valorAjustado
      
        return produto
    })
    
    const estoqueAtualizado=precosAjustados.sort((a,b):number=>{
        if(a.quantidade<b.quantidade){

            return -1
        }else if(a.quantidade===b.quantidade){
            return 0
        }else{
            return 1
        }
    })
    
	return estoqueAtualizado
}
console.log("////////////////////  final")
console.log(ajustaPreco(estoque))