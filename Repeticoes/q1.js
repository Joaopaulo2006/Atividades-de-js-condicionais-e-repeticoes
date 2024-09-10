alert("1) Desenvolver um algoritmo que efetue a soma de todos os números ímpares que são múltiplos de três e que se encontram no conjunto dos números de 1 até 500.");


 var x = 0;
     for (var i = 1; i <= 500; i++) {
         if (i % 3 == 0 && i % 2 !== 0) {
         x += i;
     }
 }

 console.log("Soma dos numeros impares multiplicaveis por 3 que se encontram no conjunto de 1 ate 500: " + x); //resultado:20667