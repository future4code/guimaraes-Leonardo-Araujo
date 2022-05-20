const operacao=process.argv[2] 
const num1=Number(process.argv[3] )
const num2=Number(process.argv[4] )

if(operacao&&num1&&num2){
let resultado=0
    switch(operacao){
        case "add":
            resultado=num1+num2
            console.log(`\u001b[34m ${resultado}` );
            break
        case "sub":
            resultado=num1-num2
            console.log(`\u001b[34m ${resultado}` );
            break 
        case "div" :
            resultado=num1/num2
            console.log(`\u001b[34m ${resultado}` );
            break 
        case "mult" :
            resultado=num1*num2
            console.log(`\u001b[34m ${resultado}` );
            break
    }
}else{
    console.log("\033[31m Esperava 2 parâmetros")
}