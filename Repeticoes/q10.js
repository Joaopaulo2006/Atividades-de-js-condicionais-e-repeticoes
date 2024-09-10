alert("10) Escreva um algoritmo que leia um valor inicial A e imprima a seqüência de valores do cálculo de A! e o seu resultado. Ex: 5! = 5 X 4 X 3 X 2 X 1 = 120");

var termos = [];
var fator = 1;
var n = prompt("Insira o valor inicial: ");

for(var i = n; i > 0; i--){
    fator *= i;
    termos.push(i);
}

var sequencia = termos.join(' X ');
console.log(n + "!" + " = " + sequencia + " = " + fator);

setTimeout(() => {
    location.reload();
}, 5000);