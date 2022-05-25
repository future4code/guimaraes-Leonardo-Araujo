//desafio 1
const doisnumeros= (num1:number,num2:number):void=>{
  const maior:number=Math.max(num1,num2)
  
  console.log("A soma desses números")
  console.log(num1+num2)
  console.log("A subtração desses números")
  console.log(num1-num2)
  console.log("A multiplicação desses números")
  console.log(num1*num2)
  console.log("O maior número é :")
  console.log(maior)


}
doisnumeros(100,20)