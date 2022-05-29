// exercicio 8
const formatarData=(data:string):Date=>{

    const date=data.split("/",3)
    const dataFormatada= new Date(date[2]+"/"+date[1]+"/"+date[0]+"/")
   
    return dataFormatada
}
const renovarHabilitacao=():boolean=>{
    let nascimento=""
    let dataEmissãoRG=""
    
    
    return
}
renovarHabilitacao()