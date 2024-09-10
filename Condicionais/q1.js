alert("1) Faça um algoritmo que leia os valores A, B, C e imprima na tela se a soma de A + B é menor que C.")

 let A2 = parseFloat(prompt("Insira o valor de A: "));
 let B1 = parseFloat(prompt("Insira o valor de B: "));
 let C1 = parseFloat(prompt("Insira o valor de C: "));

let D = A2 + B1;

 if(A2 + B1 < C1){
     console.log("A + B é menor que C: " + A2 + " + " + B1 + " = " + D + " < " + C1 + ".");
 } else {
     console.log("A + B é maior que C: " + A2 + " + " + B1 + " = " + D + " > " + C1 + ".");

 }