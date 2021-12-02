//------Exercícios de interpretação de código 01

// Será impresso no console o valor 10


//------Exercícios de interpretação de código 02

// A-> Será impresso  o valores 19,21,23,25,27 e 30 um abaixo do outro

//B -->  Sim, para acessar o índice do elemento basta acrescentar um console.log(lista.indexOf(numero)) dentro do bloco if

//------Exercícios de interpretação de código 03
/* Será impresso no console:

  *
  **
  ***
  ****
*/

// Exercícios de escrita de código 01 --> 

let quantidadeDePets =Number(prompt("Quantos pets você tem? "))

if(quantidadeDePets===0){
	console.log("Que pena! VocÊ pode adotar um pet !")


}else if(quantidadeDePets>0){
	let pets=[]
	for(let i=0;i<quantidadeDePets;i++){
			pets.push(prompt(`Digite o nome do seu pet número ${i+1}:`))
	}
	console.log(pets)
}

// Exercícios de escrita de código 02 --> 
// A
const arrayOriginal=[2,3,5,6,47,15,78,115]

function imprimeValores(array){
	for(let valor of (array)){
		console.log(valor)	
	
	}

}
imprimeValores(arrayOriginal)

// B 

console.log("<----------------->")
console.log("<----------------->")
function imprimeValorDividido10(array){
	for(let valor of array){
		console.log(valor/10)	
	
	}
}
imprimeValorDividido10(arrayOriginal)	

// C
console.log("<----------------->")
console.log("<----------------->")
function imprimeValorPar(array){
	let arrayDePares=[]
	for(let valor of array){
		if (valor%2==0){
			arrayDePares.push(valor)
		}
		
	}
	
		console.log(arrayDePares)
		
	
}
imprimeValorPar(arrayOriginal)

// D 
function imprimeArrayStrings(){
	let arrayStrings=[]
	
	for(let i=0;i<arrayOriginal.length;i++){
		
		arrayStrings.push(`O elemento do index ${i} é ${arrayOriginal[i]}`)
	}
	for( let valor of arrayStrings){
		console.log(valor)
	}

}
imprimeArrayStrings()

// E 

function imprimeMaiorEMenor(array){
	let maior=array[0]
	let menor=array[1]
	for(let valor of array){
		if(valor> maior){
			maior=valor
		}else{
			if(valor<menor){
				menor=valor
			}
		}
		
	}
	console.log(array)
	console.log("maior :"+maior,"menor: "+menor)	
}
imprimeMaiorEMenor(arrayOriginal)

/// ------------ Desafio   1 ------------
/*
let numero=Number(prompt("Escolha um número para iniciar"))
let continuar=true
let tentativas=0
console.log("Vamos Jogar !")

while(continuar){
	let chute=Number(prompt("chute um numero:"))
	tentativas++
	console.log("O número chutado foi: "+chute)
	if(chute>numero){
		console.log("Errrrrrrrrou,o número escolhido é menor")
			
	}else if(chute<numero){
		console.log("Errrrrrrrrou,o número escolhido é maior")
	}else {
		console.log("Acertou !! ")
		continuar=false
	}
	
	
}
console.log("O número de tentativas foi: "+tentativas)


*/
/// ------------ Desafio  02------------


const numeroSorteado=Math.floor(Math.random()*100)

let continuar=true
let tentativas=0
console.log("Vamos Jogar !")

while(continuar){
	let chute=Number(prompt("chute um numero:"))
	tentativas++
	console.log("O número chutado foi: "+chute)
	if(chute>numeroSorteado){
		console.log("Errrrrrrrrou,o número escolhido é menor")
			
	}else if(chute<numeroSorteado){
		console.log("Errrrrrrrrou,o número escolhido é maior")
	}else {
		console.log("Acertou !! ")
		continuar=false
	}
	
	
}
console.log("O número de tentativas foi: "+tentativas)

//  Foi fácil fazer a alteração uma vez que já conhecia a logica de sortea número aleatórios 


