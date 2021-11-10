/* 1- o codigo abaixo irá exibir no console o valor armazenado na variavel b, e depois na sequência será impresso o valor armazenado  na variável a mais o valor atualizado da variável b separando a e b por um espaço */
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)


// 2-  Será exibida uma mensagem de erro, pois c não foi declarado como variável.

let a = 10
let b = 20
c = a 
b = c 
a = b

console.log(a, b, c)


// 3- Variável p poderia se chamar horasTrabalhadas e a variável t poderia se chamar valorDaDiaria .

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)




// exercicio de escrita n° 1

let nome 
let idade 

console.log(typeof nome, typeof idade)
/* o tipo de variável exibido foi undefined,undefined é o valor padrão para variáveis que não possui  valor atribuído */
nome=prompt("Qual o seu nome ? ")
idade= prompt("qual sua idade ? ")
console.log(typeof nome, typeof idade)

//como foi atribuído valor as variáveis agora o seu tipo é String o tipo padrão do prompt
console.log("Olá",nome, ", Você tem", idade, "anos ")

// exercicio de escrita n° 2

let ehEstudante="Voce é estudante na Labenu ?"
let ehCasado="Você é casado ?"
let sabeNadar="Você sabe nadar ?"
let respEhEstudante=prompt(ehEstudante)
let respEhCasado=prompt(ehCasado) 
let respSabeNadar=prompt(sabeNadar)

console.log(ehEstudante,"-",respEhEstudante)
console.log(ehCasado,"-",respEhCasado)
console.log(sabeNadar,"-",respSabeNadar)

// exercicio de escrita n° 3

let a =10
let b =25

let c 
c=a
a=b
b=c
console.log("O novo valor de a é",a)
console.log("O novo valor de b é",b)


// Desafio

let valor1=Number(prompt("Digite o primeiro número?"))
let valor2=Number(prompt("Digite o segundo número?"))
console.log("O primeiro número somado ao segundo resulta em:",valor1+valor2)
console.log("O primeiro número multiplicado pelo  segundo resulta em:",valor1*valor2)

