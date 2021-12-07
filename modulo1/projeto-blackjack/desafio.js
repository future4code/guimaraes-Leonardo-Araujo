/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
let jogador1 = [] // Array para guardar as cartas do Usuário
let jogador2 = [] // Array para guardar as cartas do Computador
let maoUsuario = ""
let maoJogador2 = ""
let pontosJogador1 = 0
let pontosJogador2 = 0

function atualizarMao() {
   maoUsuario = ""
   pontosJogador1 = 0
   for (let index = 0; index <= jogador1.length - 1; index++) {
      maoUsuario += jogador1[index].texto + " "
      pontosJogador1 += jogador1[index].valor

   }

}

function finalizarJogo() { // exibição do resultado da rodada


   let resultadoFinal = ""
   if (pontosJogador1 > pontosJogador2 && pontosJogador1 <= 21) {
      resultadoFinal = "O usuário ganhou!"
   } else if (pontosJogador2 > pontosJogador1 && pontosJogador2 <= 21) {
      resultadoFinal = "O computador ganhou!"
   } else if (pontosJogador2 > 21 && pontosJogador1 <= 21) {
      resultadoFinal = "O usuário ganhou!"
   } else if (pontosJogador1 > 21 && pontosJogador2 <= 21) {
      resultadoFinal = "O computador ganhou!"
   } else {
      resultadoFinal = "Empate!"
   }
   alert(
      `Usuario - Cartas: ${maoUsuario} - Pontuação: ${pontosJogador1}` +
      "\n" +
      `Computador - Cartas: ${maoJogador2} - Pontuação: ${pontosJogador2}` +
      "\n" + resultadoFinal)

}

function sorteaCartas() {
   let cartas = []
   cartas.push(comprarCarta())
   cartas.push(comprarCarta())
   return cartas

}
console.log("Boas vindas ao jogo de Blackjack!")

if (confirm("Boas vindas ao jogo de Blackjack! \n Quer iniciar uma nova rodada?")) {
   jogador1.push(comprarCarta())
   jogador1.push(comprarCarta())

   jogador2.push(comprarCarta())
   jogador2.push(comprarCarta())
   if (jogador1[0] == "A" && jogador1[1] == "A" || jogador2[0] == "A" && jogador2[0] == "A") {
      jogador1 = []
      jogador2 = []
      jogador2 = sorteaCartas()
      jogador1 = sorteaCartas()
   }
   pontosJogador2 = jogador2[0].valor + jogador2[1].valor
   maoJogador2 = jogador2[0].texto + jogador2[1].texto
   let continuar = confirm(`Suas cartas são ${jogador1[0].texto+" "+jogador1[1].texto} . A carta revelada do computador é ${jogador2[0].texto}.` +
      "\n" + "Deseja comprar mais uma carta?")
   if (continuar == true) {
      jogador1.push(comprarCarta())
      atualizarMao()
   }

   while (continuar) {




      if (pontosJogador1 > 21) {
         continuar = false



      } else {


         continuar = confirm(`Suas cartas são ${maoUsuario} . A carta revelada do computador é ${jogador2[0].texto}.` +
            "\n" + "Deseja comprar mais uma carta?")
         if (continuar) {
            jogador1.push(comprarCarta())
            atualizarMao()
         } else {
            continuar = false

         }




      }
   }


   atualizarMao()
   if (pontosJogador1 <= 21) {


      while (pontosJogador2 < pontosJogador1 && pontosJogador2 <= 21) {
         jogador2.push(comprarCarta())
         pontosJogador2 += jogador2[jogador2.length - 1].valor
         maoJogador2 += jogador2[jogador2.length - 1].texto

      }
   }

   finalizarJogo()


} else {
   alert("O jogo acabou.")
}