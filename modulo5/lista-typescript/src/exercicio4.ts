// exercício 4
const employee=[
	{ nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: "vendas", presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: "financeiro", presencial: true},
	{ nome: "João" ,salário: 2800, setor: "marketing", presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: "financeiro", presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: "vendas", presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: "marketing", presencial: true }
]
enum Setor{
    MARKETING="marketing",
    VENDAS="vendas",
    FINANCEIRO="financeiro"

}
type Employee={
    name:String,
    salario:number,
    setor:Setor,
    presencial:boolean
}
const employeeMaketing=(employees:Array<object>):Array<object>=>{
    const marketingEmployee=employees.filter((employee:Employee)=>{
            return employee.setor==="marketing"
    })

    return marketingEmployee

}
console.log(employeeMaketing(employee))