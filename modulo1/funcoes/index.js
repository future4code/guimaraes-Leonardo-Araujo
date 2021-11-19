/* 1-
a--> será impresso no console o valor 10 e depois na outra linha será impresso 50

b-->   será impresso novamente no  console o valor 10 e depois na outra linha será impresso 50

2-
a--> está função recebe com parâmetro um texto que o usuário digitou e converte toda string para letras minúsculas
e depois retorna um valor booleano de true ou false se na frase existe a palavra cenoura.

b-->
i--> true
ii--> true
iii--> false

*/

// Exercícios de escrita de código 01

function mensagem(){
    console.log(`Eu sou Leonardo, tenho 31 anos, moro em São Paulo e sou estudante na Labenu.`)
}

function mensagem2(nome,idade,cidade,profissão){
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão} na Labenu.`)
}
// Exercícios de escrita de código 02
// a
function soma(num1,num2){
    return num1+num2
}
console.log(soma(100,280))
// b 
function soma2(num1,num2){
    return num1>=num2
}
// c
function numeroPar(num){
    return num%2===0
}
// d
function mensagem3(string){
    console.log(string.length +"-"+ string.toUpperCase())
}

// Exercícios de escrita de código 03
function soma03( numero1,numero2){
 console.log("Soma: "+ numero1+numero2)
}
function subtraçao(numero1,numero2){
    console.log("Subtração: "+(numero1-numero2))
}
function divisao(numero1,numero2){
    console.log("Divisão: "+ numero1/numero2)
}
function multiplicação(numero1,numero2){
    console.log("Multiplicação: "+ numero1*numero2)
}
let numero1=Number(prompt("Digite um numero:"))
let numero2=Number(prompt("Digite outro numero:"))

console.log(`Números inseridos ${numero1} e ${numero2}`)
soma03( numero1,numero2) 
subtraçao(numero1,numero2) 
divisao(numero1,numero2) 
multiplicação(numero1,numero2) 


// Desáfio 01

let parametro=(parametros)=>{ console.log(parametros) }
let parametro02=(parametro01,parametro02)=>{ 
    const resultado= parametro01+parametro02
    parametro(resultado)
 }
// Desáfio 02

function teoremaPitagoras(cat01,cat02){
    return Math.sqrt((cat01*cat01)+(cat02*cat02))

}

console.log("hipotenusa : "+teoremaPitagoras(1,10))