alert("7) Faça um algoritmo que leia uma variável e some 5 caso seja par ou some 8 caso seja ímpar, imprimir o resultado desta operação.");


soma2 = 0;
let v = parseFloat(prompt("Inserir valor: "));
if(v % 2 == 0) {
    soma2 = v + 5;
    console.log("Resultado da operação par: " + v + " + " + "5 = " + soma2);
} else {
    soma2 = v + 8;
    console.log("Resultado da operação impar: " + v + " + " + "8 = " + soma2);
}