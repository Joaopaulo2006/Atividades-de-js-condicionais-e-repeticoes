alert("2) Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e mostrar: a.A menor altura do grupo; b.A maior altura do grupo;");


var alturas = [];
for (var i = 1; i <= 15; i++) {
    var altura = prompt("Altura da " + i + "º pessoa:");
    var NumAlt = parseFloat(altura);

    if (!isNaN(NumAlt) && NumAlt > 0) {
        alturas.push(NumAlt);
    } else {
        alert("Número invalido tente novamente");
        i--;
    }
}
console.log("Passoa de menor e maior altura")
var Menornum = Math.min(...alturas);
console.log("Menor altura: " + Menornum);
var Maiornum = Math.max(...alturas);
console.log("Maior altura: " + Maiornum);

setTimeout(() => {
    location.reload();
}, 5000);


