var dolarTexto = prompt("Qual valor em dolar você quer converter?")

var dolarNum = parseFloat(dolarTexto)

var real = dolarNum * 5.5
var realDec = real.toFixed(2)

alert(realDec)
