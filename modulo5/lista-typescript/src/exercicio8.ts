// exercicio 8
const formatarData=(data:string):Date=>{

    const date=data.split("/",3)
    const dataFormatada= new Date(date[2]+"/"+date[1]+"/"+date[0]+"/")
   
    return dataFormatada
}
const renovarHabilitacao=():boolean=>{
    let nascimento=""
    let dataEmissãoRG=""
    const prompt = require('prompt-sync')
    let pt =prompt()
    
    nascimento=pt("digite a data de nascimento:")
    dataEmissãoRG=pt("digite a data de emissão do RG:")
    const dataNascimentoFormatada=formatarData(nascimento)
    const dataEmissaoRGFormatada=formatarData(dataEmissãoRG)
   const dataAtual=new Date()
   const difNascimento= Math.floor((dataAtual.getTime()-dataNascimentoFormatada.getTime())/1000/60/60/24/365)
   const difemissãoRG= Math.floor((dataAtual.getTime()-dataEmissaoRGFormatada.getTime())/1000/60/60/24/365)
   
   if(difNascimento<=20&&difemissãoRG<5){
       console.log("não precisa renovar !")
   }else if(difNascimento<=20&&difemissãoRG>=5){
       console.log("Precisa renovar !")
   }else if(difNascimento>20&&difNascimento<=50&&difemissãoRG<10){
       console.log("não precisa renovar !")
   }else if(difNascimento>20&&difNascimento<=50&&difemissãoRG>=10){
       console.log("Precisa renovar !")
   
   }else if(difNascimento>50&&difemissãoRG<15){
       console.log("não precisa renovar !")
   }else if(difNascimento>50&&difemissãoRG>=15){
       console.log("Precisa renovar !")
   }

    
    return
}
renovarHabilitacao()