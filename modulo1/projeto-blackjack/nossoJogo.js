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

console.log("Boas vindas ao jogo de Blackjack!")
if (confirm("Quer iniciar uma nova rodada?")) {
   let cartaUsuario = [] // Array para guardar as cartas do Usuário
   cartaUsuario.push(comprarCarta())
   cartaUsuario.push(comprarCarta())
   let cartaComputador = [] // Array para guardar as cartas do Computador
   cartaComputador.push(comprarCarta())
   cartaComputador.push(comprarCarta())
   const jogador1 = { // objetos para representar jogadores 1 e 2
      nome: "Usuário",
      cartas: cartaUsuario,
      pontuacao: cartaUsuario[0].valor + cartaUsuario[1].valor
   }
   const jogador2 = {
      nome: "Computador",
      cartas: cartaComputador,
      pontuacao: cartaComputador[0].valor + cartaComputador[1].valor
   }
   console.log(jogador1.nome + " - " + jogador1.cartas[0].texto, jogador1.cartas[1].texto + " - " + "Pontuação: " + jogador1.pontuacao)
   console.log(jogador2.nome + " - " + jogador2.cartas[0].texto, jogador2.cartas[1].texto + " - " + "Pontuação: " + jogador2.pontuacao)
   if (jogador1.pontuacao < jogador2.pontuacao) { // exibição do resultado da rodada
      console.log(" O Vencedor é o Computador !!")
   } else if (jogador1.pontuacao == jogador2.pontuacao) {
      console.log(" Empate !!")
   } else {
      console.log(" O Vencedor é o Usuário !!")
   }
} else {
   console.log("O jogo acabou !")
}