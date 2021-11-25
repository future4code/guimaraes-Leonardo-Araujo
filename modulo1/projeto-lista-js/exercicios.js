// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("Digite a altura do:"))
  const largura = Number(prompt("Digite a largura :"))
  console.log(altura * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Digite o ano atual: "))
  let anoNascimento = Number(prompt("Digite seu ano de nascimento: "))
  console.log(anoAtual - anoNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  return peso / (altura * altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  let nome = prompt("Digite seu nome:")
  let idade = Number(prompt("Digite sua idade:"))
  let email = prompt("Digite seu email:")
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  console.log("Meu nome é " + nome + ", tenho " + idade + " anos, e o meu email é " + email + ".")

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cor1 = prompt("Digite sua primeira cor favorita:")
  let cor2 = prompt("Digite sua Segunda cor favorita:")
  let cor3 = prompt("Digite sua Terceira cor favorita:")

  const coresFavoritas = [cor1, cor2, cor3]

  console.log(coresFavoritas)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length == string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  let a = array.length - 1
  return array[a]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let indice = array.length - 1
  let primeiroElemento = array[indice]
  let ultimoElemento = array[0]
  array.splice(0, 1, primeiroElemento)
  array.splice(indice, 1, ultimoElemento)

  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() === string2.toLowerCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Digite o ano atual:"))
  let anoNascimento = Number(prompt("Digite o ano de nascimento :"))
  let anoEmissaoRG = Number(prompt("Digite o ano deessão do RG :"))
  let idade = anoAtual - anoNascimento
  let rgTempo = anoAtual - anoEmissaoRG
  console.log((idade <= 20 && rgTempo >= 5) || (idade >= 21 && idade <= 50 && rgTempo >= 10) || (idade >= 51 && rgTempo >= 15))
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui  
  let a = ano % 400 === 0
  let b = ano % 4 === 0
  let c = !(ano % 100 == 0 && (a == 0))
  return a || b && c

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const ehMaior = prompt("Você tem mais de 18 anos? (sim/não)").toLowerCase()
  const ensinoMedioCompleto = prompt("Você possui ensino médio completo? (sim/não)").toLowerCase()
  const disponibilidadeHorario = prompt("Você possui disponibilidade exclusiva durante os horários do curso? (sim/não)").toLowerCase()
  console.log(ehMaior === "sim" && ensinoMedioCompleto === "sim" && disponibilidadeHorario === "sim")
}