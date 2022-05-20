/*1-
Para acessar valores passados por parâmetros no terminal utilizamos uma variável para armazenar o valor de process.argv[2]*/

const nome=process.argv[2]
const idade=process.argv[3]
const idade7Anos=Number(idade)+7

if(nome|| idade ||(nome&& idade)){
    console.log("Esperava 2 parâmetros só recebi um.")
    
}else{
    console.log(`Olá, ${nome}! Você tem ${idade} anos.Em sete anos você terá ${idade7Anos}`)
}