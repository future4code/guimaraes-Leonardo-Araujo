enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}
type Filme={
    name:string,
    lancamento:number,
    genero:string,
    pontuacao?:number
}
const filme=(nome:string,lancamento:number,genero:string,pontuacao?:number):Filme=>{
    const filme:Filme={
        name:nome,
        lancamento:lancamento,
        genero:genero,
       }
       pontuacao&&(filme.pontuacao=pontuacao)
    return filme
}
console.log(filme("Duna", 2021, GENERO.ACAO,74))