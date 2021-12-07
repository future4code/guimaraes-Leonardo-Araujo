//   Exercícios de interpretação de código 01
// será impresso no console o nome e apelido ,seguido  do indice do objeto seguido do array usuários

//   Exercícios de interpretação de código 02
//será impresso no console um novo array somente com os nomes do array usuários


//   Exercícios de interpretação de código 03
// será impresso no console  todos os apelidos que são diferente de Chijo

//   Exercícios de escrita de código  01

const pets = [{
        nome: "Lupin",
        raca: "Salsicha"
    },
    {
        nome: "Polly",
        raca: "Lhasa Apso"
    },
    {
        nome: "Madame",
        raca: "Poodle"
    },
    {
        nome: "Quentinho",
        raca: "Salsicha"
    },
    {
        nome: "Fluffy",
        raca: "Poodle"
    },
    {
        nome: "Caramelo",
        raca: "Vira-lata"
    },
]

const nomesDogs = pets.map((item) => {
    return item.nome
})

console.log(nomesDogs)


const apenasSalsicha = pets.filter((item) => {
    return item.raca === "Salsicha"
})
console.log(apenasSalsicha)

const arrayMensagem = pets.filter((item) => {
    if (item.raca === "Poodle") {

        return item.nome
    }
}).map((item) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
})
console.log(arrayMensagem)

//   Exercícios de escrita de código  02
const produtos = [{
        nome: "Alface Lavada",
        categoria: "Hortifruti",
        preco: 2.5
    },
    {
        nome: "Guaraná 2l",
        categoria: "Bebidas",
        preco: 7.8
    },
    {
        nome: "Veja Multiuso",
        categoria: "Limpeza",
        preco: 12.6
    },
    {
        nome: "Dúzia de Banana",
        categoria: "Hortifruti",
        preco: 5.7
    },
    {
        nome: "Leite",
        categoria: "Bebidas",
        preco: 2.99
    },
    {
        nome: "Cândida",
        categoria: "Limpeza",
        preco: 3.30
    },
    {
        nome: "Detergente Ypê",
        categoria: "Limpeza",
        preco: 2.2
    },
    {
        nome: "Vinho Tinto",
        categoria: "Bebidas",
        preco: 55
    },
    {
        nome: "Berinjela kg",
        categoria: "Hortifruti",
        preco: 8.99
    },
    {
        nome: "Sabão em Pó Ypê",
        categoria: "Limpeza",
        preco: 10.80
    }
]

const nomeProdutos = produtos.map((item) => {
    return item.nome
})
console.log(nomeProdutos) // array somente com nomes

const produtosComDesconto = produtos.map((item) => {
    resultado = {
        nome: item.nome,
        preco: item.preco - (item.preco * 0.05)
    }
    return resultado
})
console.log(produtosComDesconto) //array com produtos com desconto

const bebidas = produtos.filter((item) => {
    return item.categoria === "Bebidas"
})


console.log(bebidas) // array somente com produtos da categoria bebidas

const produtosYpe = produtos.filter((item) => {
    return item.nome.includes("Ypê")
})
console.log(produtosYpe) // array de produtos Ypê

const mensagemYpe = produtos.filter((item) => {
    return item.nome.includes("Ypê")
}).map((item) => {
    return `Compre ${item.nome} por R$ ${item.preco}`
})

console.log(mensagemYpe)

//   Desafios

const pokemons = [{
        nome: "Bulbasaur",
        tipo: "grama"
    },
    {
        nome: "Bellsprout",
        tipo: "grama"
    },
    {
        nome: "Charmander",
        tipo: "fogo"
    },
    {
        nome: "Vulpix",
        tipo: "fogo"
    },
    {
        nome: "Squirtle",
        tipo: "água"
    },
    {
        nome: "Psyduck",
        tipo: "água"
    },
]

const pokemonsNomes = pokemons.map((pokemom) => {
    return pokemom.nome
}).sort()
console.log(pokemonsNomes)

