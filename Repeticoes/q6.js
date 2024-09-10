alert("6) Escrever um algoritmo que gera e escreve os números ímpares entre 100 e 200.");


var NumI = [];
for(var i = 100; i <= 200; i++){
    if(i % 2 !== 0){
        NumI.push(i);
    }
}
console.log("Numeros impares entre 100 e 200: " + NumI + ".");

setTimeout(() => {
    location.reload();
}, 5000);