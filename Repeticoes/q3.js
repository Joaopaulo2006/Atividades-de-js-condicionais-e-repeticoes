alert("3) Desenvolver um algoritmo que leia um número não determinado de valores e calcule e escreva a média aritmética dos valores lidos, a quantidade de valores positivos, a quantidade de valores negativos e o percentual de valores negativos e positivos.");


 const n1 = prompt("Insira a quantidade de numeros: ");

 var numeros1 = [];
 var soma1 = 0;
 var mediart1 = 0;
 var contp1 = 0;
 var contn1 = 0;
 var porcntgN1 = 0;
 var porcntgP1 = 0;

 for (var i = 1; i <= n1; i++) {
     var nbm1 = parseFloat(prompt("Insira o " + i + "º número: "));
     numeros1.push(nbm1);
 }

 for (var i = 0; i < numeros1.length; i++){

     soma1 += numeros1[i];

     if(numeros1[i] < 0){
         contn1 ++;
     }

     if(numeros1[i] > 0) {
         contp1 ++;
     }

 }

 mediart1 += soma1 / numeros1.length;
 console.log("Media aritmetica dos numeros inseridos: " + mediart1);

 porcntgP1 = (contp1 / numeros1.length) * 100;
 console.log("quantidade de números positivos inseridos: " + contp1 +'\n'+ "e sua porcentagem: " + porcntgP1 + "%");

 porcntgN1 = (contn1 / numeros1.length) * 100;
 console.log("quantidade de números negativos inseridos: " + contn1 +'\n'+ "e sua porcentagem: " + porcntgN1 + "%");


 console.log("Numeros inseridos:");
 numeros1.forEach(function(numero) {
     console.log(numero);
 })

 setTimeout(() => {
    location.reload();
}, 5000);