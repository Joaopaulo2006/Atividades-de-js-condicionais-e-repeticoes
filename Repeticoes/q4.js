alert("4) Escrever um algoritmo que leia uma quantidade desconhecida de números e conte quantos deles estão nos seguintes intervalos: [0-25], [26-50], [51-75] e [76-100]. A entrada de dados deve terminar quando for lido um número negativo.");




 const n1 = parseInt(prompt("Insira a quantidade de numeros: "));

 var entre0e25 = [], entre26e50 = [], entre51e75 = [], entre76e100 = [];

 for (var i = 1; i <= n1; i++) {

     var nbm = parseFloat(prompt("Insira o " + i + "º número: "));

     if (nbm < 0) {
         console.log("Número negativo detectado. Encerrando a entrada de dados.");
         break;
     }

     if (nbm >= 0 && nbm <= 25) {
         entre0e25.push(nbm);
     }

     if (nbm >= 26 && nbm <= 50) {
         entre26e50.push(nbm);
     }

     if (nbm >= 51 && nbm <= 75) {
         entre51e75.push(nbm);
     }

     if (nbm >= 76 && nbm <= 100) {
         entre76e100.push(nbm);
     }

 }

 console.log("Numeros inseridos entre 0 e 25:");
 entre0e25.forEach(function (numero) {
     console.log(numero);
 })

 console.log("Numeros inseridos entre 26 e 50:");
 entre26e50.forEach(function (numero) {
     console.log(numero);
 })

 console.log("Numeros inseridos entre 51 e 75:");
 entre51e75.forEach(function (numero) {
         console.log(numero);
 })

 console.log("Numeros inseridos entre 76 e 100:");
 entre76e100.forEach(function (numero) {
     console.log(numero);
 })

 setTimeout(() => {
    location.reload();
}, 5000);