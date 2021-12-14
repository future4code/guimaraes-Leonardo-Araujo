ˋˋˋ
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
 if(valorTotalVendas===0||qtdeCarrosVendidos===0){
    return 2000
 }else{
    const valorDoCarro=(valorTotalVendas/qtdeCarrosVendidos)
  const salarioFixo=2000
  const valorPercentual=((valorDoCarro*0.05)+100)
  let comissao=qtdeCarrosVendidos*valorPercentual
   return (salarioFixo+comissao)
  }
  
}
ˋˋˋ