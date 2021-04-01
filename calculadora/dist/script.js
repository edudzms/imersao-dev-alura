var primeiroValor = parseInt(prompt("Digite o primeiro valor:"))
var segundovalor = parseInt(prompt("Digite o segundo valor:"))

var operacao = prompt('Digite 1 para multiplicar, 2 para dividir, 3 para somar ou 4 para subitrair:')

if (operacao == 1) {
  var resultado = primeiroValor * segundovalor
  document.write("<h2>" + primeiroValor + " X " + segundovalor + " = " + resultado + "</h2>")
} else if (operacao == 2){
  var resultado = primeiroValor / segundovalor
  document.write("<h2>" + primeiroValor + " / " + segundovalor + " = " + resultado + "</h2>")
} else if (operacao == 3){
  var resultado = primeiroValor + segundovalor
  document.write("<h2>" + primeiroValor + " + " + segundovalor + " = " + resultado + "</h2>")
} else if (operacao == 4){
  var resultado = primeiroValor - segundovalor
  document.write("<h2>" + primeiroValor + " - " + segundovalor + " = " + resultado + "</h2>")
} else {
  document.write("<h2>Opção inváida</h2>")
}