// exercicio 9




const palavra=process.argv[2]


const fatorialPalavra=(palavra:string):number=>{
    const qtdLetras=palavra.length
    if(qtdLetras===0||qtdLetras===1){
     return 1   
    }else {
        let total=1
        for(let i=qtdLetras;i>0;i--){
            total*=i 
        }

      return   total
    }

}
console.log(fatorialPalavra(palavra))