alert("4) Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais deverá se somar os dois, caso contrário multiplique A por B. Ao final de qualquer um dos cálculos deve-se atribuir o resultado para uma variável C e mostrar seu conteúdo na tela.");


let A1 = parseInt(prompt("Digite o valor de A: "));
let B1 = parseInt(prompt("Digite o valor de B: "));
let C1 = 0;
if (A1 == B1) {
    C1 = A1 + B1;
} else {
    C1 = A1 * B1;
}
console.log("Valor de A: " + A1 + '\n' + "Valor de B: " + B1 + '\n' + "Valor de C: " + C1);