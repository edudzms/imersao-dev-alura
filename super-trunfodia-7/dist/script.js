var cartaA = {
  nome: "Homem de ferro",
  atributos: {
    ateaque: 50,
    defesa: 60,
    magia: 50
  }
}
var cartaB = {
  nome: "Capitão America",
  atributos: {
    ateaque: 50,
    defesa: 65,
    magia: 40
  }
}
var cartaC = {
  nome: "Thor",
  atributos: {
    ateaque: 60,
    defesa: 66,
    magia: 70
  }  
}

var cartaMaq
var cartaJog
var cartas = [cartaA, cartaB, cartaC]

function sortearCarta(){
  var numCartaMaq = parseInt(Math.random() * 3)
  cartaMaq = cartas[numCartaMaq]
  
  var numCartaJog = parseInt(Math.random() * 3)
  while (numCartaJog == numCartaMaq){
    numCartaJog = parseInt(Math.random() * 3)
  }
  cartaJog = cartas[numCartaJog]
  console.log(cartaJog)
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  exibirOpcoes()
}

function exibirOpcoes() {
  var opcoes = document.getElementById('opcoes')
  var opcoesTexto = ""
  for (var atributo in cartaJog.atributos){
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
  }
  opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado(){
  var radioAtributo = document.getElementsByName('atributo')
  for (var i = 0; i < radioAtributo.length; i++){
    if(radioAtributo[i].checked){
      return radioAtributo[i].value
    }
  }
}

function jogar(){
  var atributoSelecionado = obtemAtributoSelecionado()
  
  if(cartaJog.atributos[atributoSelecionado] > cartaMaq.atributos[atributoSelecionado]){
    alert("Venceu a carta da máquina")
  } else if(cartaJog.atributos[atributoSelecionado] < cartaMaq.atributos[atributoSelecionado]){
    alert("Perdeu, a carta da máquina é maior")
  } else {
    alert("empatou")
  }
  console.log(cartaMaq)
}