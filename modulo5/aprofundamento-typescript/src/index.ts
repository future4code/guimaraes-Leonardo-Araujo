//exercicío 1
let minhaString:string= "minha string 1"

// A-> não é possivel atribuir o tipo number numa variável string

let meuNumero:number=25

/* B->  para que a variável aceite números e strings podemos utilizar o  union
type:
por exemplo:
let meuNumero:number | string
*/

// C->
const person1:{name:string,idade:number,corFavorita:string}={
    name:"Ana",
    idade:26,
    corFavorita:"azul"
}
const person2:{name:string,idade:number,corFavorita:string}={
    name:"Carlos",
    idade:26,
    corFavorita:"verde"
}
const person3:{name:string,idade:number,corFavorita:string}={
    name:"Paulo",
    idade:36,
    corFavorita:"vermelho"
}

type pessoa={
    nome:string,
    idade:number,
    corFavorita:string
}
const person4:pessoa={
    nome:"Max",
    idade:4,
    corFavorita:"verde"
}
//D->
enum CorFavorita{
    VERMELHO ="Vermelho",
    LARANJA="Laranja",
    AMARELO="Amarelo",
    VERDE="Verde",
    AZUL="Azul",
    ANIL="Anil ",
    VIOLETA="Violeta"
}
type pessoa2={
    nome:string,
    idade:number,
    corFavorita:CorFavorita
}
const person5:pessoa2={
    nome:"MARIA",
    idade:4,
    corFavorita:CorFavorita.LARANJA
}
console.log(person5)