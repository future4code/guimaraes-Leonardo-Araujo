// exercício 01

// A --> O código  executa um teste  no número digitado pelo usuário , ele verifica se o número é par se o número for par é impresso no console  a mensagem " Passou no teste"  se não for par é impresso "Não passou no teste".

// B  ---> é impresso no console "Passou no teste " quando o número for par.

// C -->  é impresso no console "Não passou no teste" quando o número for impar.

// exercício 02


// a -->  O código define o valor de uma fruta baseado na fruta digitada pelo usuário, depois é impresso no console uma mensagem com o nome da fruta e o seu respectivo valor.

//  b --> Se o valor digitado pelo usuário for "Maçã" será impresso no console a mensagem " O preço da fruta Maçã é R$ 2.25"

// C -->    Se o valor digitado pelo usuário for "Pêra" será impresso no console a mensagem " O preço da fruta Pêra é R$ 5"

// exercício 03


// A --> A primeira linha armazena na  variável numero o valor digitado pelo usuário no prompt  convertido em numero.

//  B -->  A mensagem exibida no terminal se o usuário digitar 10 será "Esse número passou no teste", e se o número digitado for -10  acontecerá um erro  pois a variável mensagem tem o escopo local e não pode ser acessada fora do bloco IF

// C -->  Sim , o erro ocorrerá porque a variável mensagem é de escopo local e só pode ser acessada dentro do bloco do IF.


// exercício de escrita de código 01

/*
let idade = Number(prompt("Digite sua idade: "))
console.log(idade)

if (idade >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir ")
}


// exercício de escrita de código 02

let turno = prompt(" Digite Seu turno: [M/V ou N]").toLowerCase()
if (turno == "m") {
    console.log("Bom dia !")
} else if (turno == "v") {
    console.log("Boa tarde !")
} else {
    console.log("Boa noite!")
}

// exercício de escrita de código 03

let turnoEx03 = prompt(" Digite Seu turno: [M/V ou N]").toLowerCase()

switch (turnoEx03) {
    case "m":
        console.log("Bom dia !")
        break
    case "v":
        console.log("Boa tarde !")
        break
    case "n":
        console.log("Boa noite !")
        break

}

// exercício de escrita de código 04

let generoFilme = prompt("Digite o gênero do filme: ").toLowerCase()
let precoIngresso = Number(prompt("Digite o preço do filme: "))

if (generoFilme === "fantasia" && precoIngresso < 15) {
    console.log("Bom filme !")

} else {
    console.log("Escolha outro filme :(")

}

// Desafio 01

let generoFilmeDesafio = prompt("Digite o gênero do filme: ").toLowerCase()
let precoIngressoDesafio = Number(prompt("Digite o preço do filme: "))

if (generoFilmeDesafio === "fantasia" && precoIngressoDesafio < 15) {
    let lanchinho = prompt("Qual lanchinho você irá comprar ? ")

    console.log(`Bom filme! \nAproveite o seu ${lanchinho}`)

} else {
    console.log("Escolha outro filme :(")

}
*/
// Desafio 02

let nomeCompleto = prompt("Digite seu nome completo: ")
let tipoDeJogo = prompt("Digite o tipo de jogo: [IN ou DO]").toUpperCase()
let etapaDoJogo = prompt("Digite a estapa do jogo:[SF/DT ou FI]").toUpperCase()
let categoria = Number(prompt("Digite a categoria do jogo:[1,2,3 ou 4]"))
let quantidadeDeIngressos = Number(prompt("Digite a quantidade de ingresssos que você deseja comprar: "))
let valorIngresso = 0
console.log("---Dados da compra---")
console.log("Nome do cliente:" + nomeCompleto)
// jogo internacional
if (tipoDeJogo === "IN") {
    console.log("Tipo do jogo:  Internacional ")
    if (etapaDoJogo === "SF") {
        console.log("Etapa do jogo: Semi final") // disputa semi final
        if (categoria == 1) {
            valorIngresso = 1320 * 4.10

        } else if (categoria == 2) {
            valorIngresso = 880 * 4.10
        } else if (categoria == 3) {
            valorIngresso = 550 * 4.10
        } else if (categoria == 4) {
            valorIngresso = 220 * 4.10
        }


    } else if (etapaDoJogo === "DT") {
        console.log("Etapa do jogo: Disputa pelo terceiro lugar") // disputa 3° lugar
        if (categoria == 1) {
            valorIngresso = 660 * 4.10

        } else if (categoria == 2) {
            valorIngresso = 440 * 4.10
        } else if (categoria == 3) {
            valorIngresso = 330 * 4.10
        } else if (categoria == 4) {
            valorIngresso = 170 * 4.10
        }
    } else {
        console.log("Etapa do jogo: final") // disputa final
        if (categoria == 1) {
            valorIngresso = 1980 * 4.10

        } else if (categoria == 2) {
            valorIngresso = 1320 * 4.10
        } else if (categoria == 3) {
            valorIngresso = 880 * 4.10
        } else if (categoria == 4) {
            valorIngresso = 330 * 4.10
        }

    }

    console.log("Categoria: " + categoria)
    console.log("Quantidade de Ingressos: " + quantidadeDeIngressos)
    console.log("---Valores---  ")
    console.log("Valor do ingresso:  U$ " + valorIngresso)
    console.log("Valor total:  U$ " + (valorIngresso * quantidadeDeIngressos))

} else if (tipoDeJogo === "DO") { // disputa nacional 
    console.log("Tipo do jogo:  nacional ")
    if (etapaDoJogo === "SF") {
        console.log("Etapa do jogo: Semi final") // disputa semi final
        if (categoria == 1) {
            valorIngresso = 1320

        } else if (categoria == 2) {
            valorIngresso = 880
        } else if (categoria == 3) {
            valorIngresso = 550 
        } else if (categoria == 4) {
            valorIngresso = 220 
        }


    } else if (etapaDoJogo === "DT") {
        console.log("Etapa do jogo: Disputa pelo terceiro lugar") // disputa 3° lugar
        if (categoria == 1) {
            valorIngresso = 660 

        } else if (categoria == 2) {
            valorIngresso = 440 
        } else if (categoria == 3) {
            valorIngresso = 330 
        } else if (categoria == 4) {
            valorIngresso = 170 
        }
    } else {
        console.log("Etapa do jogo: final") // disputa final
        if (categoria == 1) {
            valorIngresso = 1980 
        } else if (categoria == 2) {
            valorIngresso = 1320 
        } else if (categoria == 3) {
            valorIngresso = 880 
        } else if (categoria == 4) {
            valorIngresso = 330 
        }

    }

    console.log("Categoria: " + categoria)
    console.log("Quantidade de Ingressos: " + quantidadeDeIngressos)
    console.log("---Valores---  ")
    console.log("Valor do ingresso:  R$ " + valorIngresso)
    console.log("Valor total:  R$ " + (valorIngresso * quantidadeDeIngressos))
}