// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let invertedArray = []
    for (let i = array.length - 1; i >= 0; i--) {
        invertedArray.push(array[i])
    }
    return invertedArray
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    let orderedAarray = []
    let maiorNumero = 0
    let copyOriginalArray = [...array]
    while (copyOriginalArray.length >= 1) {
        maiorNumero = Math.max(...copyOriginalArray) //armazenando o maior número em uma variável
        orderedAarray.unshift(maiorNumero) // adiciona o maior número no inicio do array
        copyOriginalArray.splice(copyOriginalArray.indexOf(maiorNumero), 1) // excluí o maior número do array cópia do original 
    }
    return orderedAarray
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arrayOfPairs = []
    for (let element of array) {
        if (element % 2 === 0) {
            arrayOfPairs.push(element)
        }
    }
    return arrayOfPairs
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayOfSquaredPairs = []
    for (let element of array) {
        if (element % 2 === 0) {
            arrayOfSquaredPairs.push(Math.pow(element, 2))
        }
    }
    return arrayOfSquaredPairs

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = array[0]
    for (let element of array) {
        if (maiorNumero < element) {
            maiorNumero = element
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
    let arrayPairs = []
    for (let i = 0; arrayPairs.length < n; i++) {
        if (i % 2 === 0) {
            arrayPairs.push(i)
        }
    }

    return arrayPairs
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
    let maiorNumero = Math.max(...array) // armazena na variável o maior numero do array
    let menorNumero = Math.min(...array) // armazena na variável o menor numero do array
    let initialArray = [...array] // cópia do array 
    if (array.length > 2) {
        initialArray.splice(initialArray.indexOf(maiorNumero), 1) // excluí do array cópia o maior número
        initialArray.splice(initialArray.indexOf(menorNumero), 1) // excluí do array cópia o menor número
        maiorNumero = Math.max(...initialArray) // armazena na variável o atual maior numero do array
        menorNumero = Math.min(...initialArray) // armazena na variável o atual menor numero do array
    } else {
        maiorNumero = Math.min(...initialArray)
        menorNumero = Math.max(...initialArray)
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
    let newPerson = {
        ...pessoa,
        nome: "ANÔNIMO"
    }
    return newPerson
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let authorizedPeople = pessoas.filter((item) => {

        return (item.altura > 1.5 && item.idade > 14 && item.idade < 60)

    })
    return authorizedPeople
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let unauthorizedPeople = pessoas.filter((item) => {

        return (item.altura < 1.5 || item.idade <= 14 || item.idade > 60)

    })
    return unauthorizedPeople

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    let totalValueOfPurchases
    for (let element of contas) {
        totalValueOfPurchases = 0
        for (let i = 0; i < element.compras.length; i++) {
            totalValueOfPurchases += element.compras[i]

        }
        element.saldoTotal -= totalValueOfPurchases
        element.compras = []
    }
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    let queriesSortedByName = consultas.sort((a, b) => {
        if (a.nome < b.nome) {
            return -1
        } else {
            return true
        }
    })
    return queriesSortedByName

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    let date = ""
    for (let element of consultas) {
        date = element.dataDaConsulta.split("/") // recortando string
        element.dataDaConsulta = new Date(date[2] + "/" + date[1] + "/" + date[0]) // transformando string em data

    }
    let newArray = consultas.sort((a, b) => { // ordenado por data
        if (a.dataDaConsulta < b.dataDaConsulta) {
            return -1
        } else {
            return true
        }
    })
    for (let element of newArray) {
        let dia = "0" + element.dataDaConsulta.getDate()
        let mes = "0" + (element.dataDaConsulta.getMonth() + 1)
        let ano = element.dataDaConsulta.getFullYear()
        element.dataDaConsulta = dia + "/" + mes + "/" + ano
    }
    return newArray
}