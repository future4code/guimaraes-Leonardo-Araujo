// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let arrayInvertido = []
    for (let i = array.length - 1; i >= 0; i--) {
        arrayInvertido.push(array[i])
    }
    return arrayInvertido
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => {
        return a - b
    })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arrayDePares = []
    for (let elemento of array) {
        if (elemento % 2 === 0) {
            arrayDePares.push(elemento)
        }
    }
    return arrayDePares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayParesAoQuadrado = []
    for (let elemento of array) {
        if (elemento % 2 === 0) {
            arrayParesAoQuadrado.push(Math.pow(elemento, 2))
        }
    }
    return arrayParesAoQuadrado

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = array[0]
    for (let elemento of array) {
        if (maiorNumero < elemento) {
            maiorNumero = elemento
        }
    }
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let menorNumero = 0
    let objDeNumeros = {}
    if (num1 > num2) {
        objDeNumeros.maiorNumero = num1
        menorNumero = num2
    } else {
        objDeNumeros.maiorNumero = num2
        menorNumero = num1
    }
    if (objDeNumeros.maiorNumero % menorNumero === 0) {
        objDeNumeros.maiorDivisivelPorMenor = true
    } else {
        objDeNumeros.maiorDivisivelPorMenor = false
    }
    objDeNumeros.diferenca = objDeNumeros.maiorNumero - menorNumero

    return objDeNumeros
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let arrayPares = []
    for (let i = 0; arrayPares.length < n; i++) {
        if (i % 2 === 0) {
            arrayPares.push(i)
        }
    }

    return arrayPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC) {
        return "Equilátero"
    } else if (ladoA === ladoB && ladoA !== ladoC || ladoC === ladoA && ladoC !== ladoB || ladoB === ladoC && ladoB !== ladoA) {
        return "Isósceles"
    } else {
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let maiorNumero = Math.max(...array)
    let menorNumero = Math.min(...array)
    let arrayInicial = [...array]
    if (array.length > 2) {
        arrayInicial.splice(arrayInicial.indexOf(maiorNumero), 1)
        arrayInicial.splice(arrayInicial.indexOf(menorNumero), 1)
        maiorNumero = Math.max(...arrayInicial)
        menorNumero = Math.min(...arrayInicial)
    } else {
        maiorNumero = Math.min(...arrayInicial)
        menorNumero = Math.max(...arrayInicial)
    }
    return [maiorNumero, menorNumero]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    filme.atores = ['Meryl Streep', ' Anne Hathaway', ' Emily Blunt', ' Stanley Tucci']
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let novaPessoa = {
        ...pessoa,
        nome: "ANÔNIMO"
    }
    return novaPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let pessoasAutorizadas = pessoas.filter((item) => {

        return (item.altura > 1.5 && item.idade > 14 && item.idade < 60)

    })
    return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasNaoAutorizadas = pessoas.filter((item) => {

        return (item.altura < 1.5 || item.idade <= 14 || item.idade > 60)

    })
    return pessoasNaoAutorizadas

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}