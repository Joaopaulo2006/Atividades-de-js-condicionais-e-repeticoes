alert("5) Faça um algoritmo estruturado que leia uma quantidade não determinada de números positivos. Calcule a quantidade de números pares e ímpares, a média de valores pares e a média geral dos números lidos. O número que encerrará a leitura será zero.");


var n = parseInt(prompt("Insira uma quantidade de números: "));
var mediaPar = 0, qntdP = 0, qntdI = 0, MediaG = 0, SomaP = 0, SomaG = 0, NumG = [];

for (var i = 1; i <= n; i++) {

    var nums = parseFloat(prompt("Insira o " + i + "º número: "));
    NumG.push(nums);
    SomaG += nums;

    if (nums == 0) {
        console.log("Leitura encerrada, número colocado: " + nums);
        break;
    }

    if (nums % 2 == 0) {
        qntdP++;
        SomaP += nums;
    }

    else {
        qntdI++;
    }
}
MediaG = SomaG / n;
mediaPar = SomaP / qntdP;

console.log("Quantidade de numero Par:" + qntdP);

console.log("***************************");

console.log("Quantidade de numero Impar:" + qntdI);

console.log("***************************");

console.log("Média dos números pares: " + mediaPar);

console.log("***************************");

console.log("Média dos números Gerais: " + MediaG);

console.log("***************************");

console.log("Numeros digitados: ");

NumG.forEach(function (numero) {
    console.log(numero);
})

setTimeout(() => {
    location.reload();
}, 5000);