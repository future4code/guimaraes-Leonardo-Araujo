/* exercício 1-
O primeiro console.log  imprimirá "a.  undefined" porque foi declarada uma variável com nome array sem atribuir valor a ela.

O segundo console.log imprimirá "b.  null" porque foi atribuido o valor null a variável array.

O terceiro console.log imprimirá "c.  11" , 11 é a quantidade de posições da variável com nome de array que foi convertida em um array

O quarto console.log imprimirá "d.  3",que refere-se ao valor armazenado no array na posição i=0.

O quinto console.log imprimirá "e.  [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]",foi alterado o valor na posição 1 do array que antes era 4 e passou a ser 19.

O sexto console.log imprimirá "f.  9",que refere-se a impressão da constante valor que recebeu seu valor do array na posição 6.

  exercicio 2
   
  O valor impresso no console será "SUBI NUM ÔNIBUS EM MIRROCOS 27", que refere-se  a frase  com todas as letras em maiúscula trocando as letras A pela letra I seguido do tamanho da frase. 
  */

 //Exercícios de escrita de código  01
 let nome=prompt("Digite seu nome:")
 let email=prompt("Digite seu email:")
 console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome} !`)

 //Exercícios de escrita de código  02

 let comidasFaforitas=["lasanha","macarrão","churrasco","pizza","batata"]
 console.log(comidasFaforitas)
 console.log("Essas são as minhas comidas preferidas:") 
 console.log(comidasFaforitas[0])
 console.log(comidasFaforitas[1])
 console.log(comidasFaforitas[2])
 console.log(comidasFaforitas[3])
 console.log(comidasFaforitas[4])
 const comidaUsuario=prompt("Digite sua comida favorita:")
 comidasFaforitas.splice(1,1,comidaUsuario)
 console.log(comidasFaforitas)

 //Exercícios de escrita de código  03

 let listaDeTarefas=[]
 listaDeTarefas.push(prompt("Digite sua primeira tarefa:"))
 listaDeTarefas.push(prompt("Digite sua segunda tarefa:"))
 listaDeTarefas.push(prompt("Digite sua terceira tarefa:"))
 console.log(listaDeTarefas)
 const indice=prompt("Digite o valor correspondente  de uma das tarefas digitadas: (ex: 0,1, ou 2)")
listaDeTarefas.splice(indice,1)
console.log(listaDeTarefas)

// Desafio 01
let frase=prompt("digite uma frase:")
let array=frase.split(" ")
console.log(frase)
console.log(array)

// Desafio 02
const frutas=["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
let Abacaxi=frutas.indexOf("Abacaxi")
console.log(frutas)
console.log(`A fruta no indice ${Abacaxi} é ${frutas[Abacaxi]} !`)