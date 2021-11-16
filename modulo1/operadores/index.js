/* 1-  Primeiro será exibido no console a mensagem :

a.  false 

Pois a constante bool1 possuí o valor true e a constante bool2 possuí valor false e o operador && requer que as 2 constantes sejam true para que seja exibido true no console.
Na sequência será exibido:

a.  false

Pois bool1 possuí o valor true ,bool2 possuí o valor false e bool3 possuí o valor false,já que bool3 é o inverso de bool1.
Na sequência o console exibirá o tipo da variável resultado que no caso é boolean
*/

/* 2-  As variáveis primeiroNumero e segundoNumero não foram covertidas em números sendo assim é impossivel fazer uma soma com elas ,ambas são tipos Strings e será impresso no console a concatenação do conteúdo  de primeiroNumero + segundoNumero .

*/

/*3- Uma possível solução seria converter o valor recebido em número quando o valor é digitado no prompt:
exemplo: 
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

*/
// Exercícios de escrita de código

// 1-

let idadeUsuario= Number(prompt("Qual sua idade ? "))
let idadeAmigo= Number(prompt("Qual a idade do seu melhor amigo ou da sua melhor amiga ? "))

console.log("Sua idade é maior do que a do seu melhor amigo ? ", idadeUsuario>idadeAmigo)
console.log(" A difença de idade é :",idadeUsuario-idadeAmigo)

// 2-
let numeroPar=Number(prompt("Digite um número par ? "))
console.log("O resto da divisão é :",numeroPar%2)

/* Sempre que o usuário digita um número par o resto da divisão é 0, e sempre que o valor digitado for impar teremos como resto a divisão o valor 1.*/ 

// 3-

let idade=Number(prompt("Digite sua idade em anos ? "))

const mesesPorAno=12
const diasPorMes= 30
const horasPorDia=24
console.log("A idade em meses:",idade*mesesPorAno)
console.log("A idade em dias: ", idade*mesesPorAno*diasPorMes)
console.log("A idade em horas: ", idade*mesesPorAno*diasPorMes*horasPorDia)

// 4 -
let valor1=Number(prompt("Digite um número"))
let valor2=Number(prompt("Digite outro número ?"))

console.log("O primeiro numero é maior que segundo?",valor1>valor2)
console.log( "primeiro numero é igual ao segundo?",valor1===valor2)
console.log(" O primeiro numero é divisível pelo segundo?",((valor1%valor2)
%2)===0)
console.log("O segundo numero é divisível pelo primeiro? ",((valor2%valor1)%2)===0)

// desafio
 // exercício 1
 
 let grausKelvin=(77-32)*(5/9)+273.15
 let grausFahenheit=(80)*(9/5)+32
 console.log("77°F em  K é",grausKelvin,"K")
 console.log("80°C em °F", grausFahenheit,"°F" )
 celciusKelvin=30+273
 celciusParaFaheinheit=(1.8*30)+32
 console.log(" 30°C em °F e K :",celciusParaFaheinheit,"°F",celciusKelvin,"K")
 let grausCelcius=Number(prompt("Digite uma temperatura em °C"))
 console.log(grausCelcius,"°C em °F e K :",(grausCelcius*1.8)+32,"°F",grausCelcius+273,"K")

// exercício 2
const kiloWattHora=0.05
console.log("Valor a ser pago por 280 quilowatt-hora R$",280*0.05)
console.log("Valor a ser pago por 280 quilowatt-hora com 15% de desconto R$",(280*0.05)-((280*0.05)*0.15))