// Exercícios de interpretação de código 01

// a--> Será impresso o nome Matheus Nachtergaele, depois Virginia Cavendish e por último será impresso o canal Globo e horário de exibição as 14h

// Exercícios de interpretação de código 02

/*  a--> seá impresso :

nome: juca,
idade: 3, 
raca: "SRD"

nome: juba,
idade: 3, 
raca: "SRD"

nome: jubo,
idade: 3, 
raca: "SRD"


b--> a sintaxe dos 3 pontinhos cria uma cópia do objeto.

    Exercícios de interpretação de código 03

a ---> será impresso false que é o valor da propriedade backender, depois será impresso undefined 

b ---> foi impresso ndefined porque não existe a propriedade altura no objeto pessoa.

*/

//  Exercícios de escrita de código 01

// a
const pessoa = {
    nome: "Amanda", 
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
 }
 function imprimirObjeto(objeto){
     console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)

 }
 imprimirObjeto(pessoa)

 // B
 const novaPessoa={
     ...pessoa,
      apelidos:["Dinha","Manda"," Ama"]
 }
 imprimirObjeto(novaPessoa)


 
//  Exercícios de escrita de código 02
// A
const pessoa1={
    nome:"Leonardo",
    idade:31,
    profissao:"Assistente de Logística"
}
const pessoa2={
    nome:"Paulo",
    idade:46,
    profissao:"Cozinheiro"
}

// B
function retornaArray(obj){
    let array=[obj.nome,obj.nome.length,obj.idade,obj.profissao,obj.profissao.length]
    console.log(array)
    return array
  
}
retornaArray(pessoa1)
retornaArray(pessoa2)


//  Exercícios de escrita de código 03

//  A
let carrinho=[]
//B
let fruta1={
    nome:"Uva", disponibilidade:true
}
let fruta2={
    nome:"Manga", disponibilidade:true
}
let fruta3={
    nome:"Laranja", disponibilidade:true
}
//C
function colocarNoCarrinho(obj){
    carrinho.push(obj)
}
// D
colocarNoCarrinho(fruta1)
colocarNoCarrinho(fruta2)
colocarNoCarrinho(fruta3)

console.log(carrinho)

// Desafio 01

function criarPessoa(){
    let nomeUsuario=prompt("Digite seu nome:")
    let idadeUsuario=Number(prompt("Digite sua idade:"))
    let profissãoUsuario=prompt("Digite sua profissão:")

    let objPessoa={
        nome:nomeUsuario,idade:idadeUsuario,profissao:profissãoUsuario
    }
    console.log(objPessoa)
    console.log(typeof objPessoa)

}
criarPessoa()

// Desafio 02

function filmes(obj1,obj2){

  return  "O primeiro filme foi lançado antes do segundo? "+(obj1.lancamento<obj2.lancamento)+" \n O primeiro filme foi lançado no mesmo ano do segundo? "+(obj1.lancamento===obj2.lancamento)
     
}
const filme1={
    titulo:"Coach Carter - Treino para a Vida",
    lancamento:2005
    
}
const filme2={
    titulo:"Batman Begins",
    lancamento:2005

}
console.log(filmes(filme1,filme2))

// Desafio 03

function controleEstoque(fruta){
    return fruta.disponibilidade=!fruta.disponibilidade
}
console.log(controleEstoque(fruta1))
console.log(fruta1)