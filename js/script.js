var valorEmDolar = window.prompt('Digite o valor em dolar? ')
var cotacaoDoDolar = 5.12;

var valorEmReal = valorEmDolar * cotacaoDoDolar;
valorEmReal = valorEmReal.toFixed(2);  //arredondando o valor para duas casas decimais

alert('R$ ' + valorEmReal);