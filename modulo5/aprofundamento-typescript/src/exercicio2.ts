// A-> a função recebe um array com entrada e devolve um objeto com  o maior valor,menor valor e média
function obterEstatisticas(numeros:number[]):{maior:number,menor:number,media:number} {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// B-> as outras variáveis são numerosOrdenados,a,b,num,soma,estatisticas omde a tipagem é feito por inferência

//C-> 
type amostra={
    numeros:number[],
    obterEstatisticas: string
}