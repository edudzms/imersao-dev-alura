var numSecreto = parseInt(Math.random() * 10)
var tentativas = 3

while (tentativas > 0) {
  var chute = parseInt(prompt('Digite um número entre 0 e 10'))
  
  if (numSecreto == chute) {
    alert('acertou')
    break
  } else if (chute > numSecreto) {
    alert('O número secreto e menor')
    tentativas = tentativas - 1
  } else if (chute < numSecreto) {
    alert('O número secreto e maior')
    tentativas = tentativas - 1
  }
}

if (chute != numSecreto) {
  alert('Suas tentativas acabaram. O número secreto era ' + numSecreto)
}