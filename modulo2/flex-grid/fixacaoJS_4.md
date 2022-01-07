```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido){ 
  // Escreva seu código aqui
  
 let countOccurrences=arrayDeNumeros.filter( value=>{
  
  if(value===numeroEscolhido){
    return value
   
  }
 
 } )
 if (countOccurrences.length>0){
  return`O número ${numeroEscolhido} aparece ${countOccurrences.length}x`
 }else{
   return "Número não encontrado"
 }
 
}


```