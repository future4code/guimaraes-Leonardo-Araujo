
// exercício 1
const blue = '\u001b[34m';
const purple = "\033[1;35m"
const nome=process.argv[2]
const birth=process.argv[3]
const imprimeNomeNascimento=(nome:string,nascimento:string):string=>{
    const dataNascimento=nascimento.split("/",3)
   
    
    return `Olá me chamo ${blue}${nome}\u001b[0m, nasci no dia ${purple} ${dataNascimento[0]}\u001b[0m do mês de ${purple}${dataNascimento[1]}\u001b[0m do ano de ${purple}${dataNascimento[2]}`
}

console.log(imprimeNomeNascimento(nome,birth))
