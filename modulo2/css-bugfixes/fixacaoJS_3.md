```function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  let nota1=p1*2
  let nota2=p2*3
  let conceito=0
  conceito=(nota1+nota2+ex)/6
  
  if(conceito>=9){
    return "A"
  }else if(conceito<9&&conceito>=7.5){
    return "B"
  }else if(conceito<7.5&&conceito>=6){
    return "C"
  }else if(conceito<6){
    return "D"
  }
}```