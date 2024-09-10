alert("8) Escreva um algoritmo que leia três valores inteiros e diferentes e mostre-os em ordem decrescente.");



let a1 = parseInt(prompt("Insira o Primeiro valor: "));
let b3 = parseInt(prompt("Insira o Segundo valor: "));
let c1 = parseInt(prompt("Insira o Terceiro valor: "));

if (a1 > b3 && a1 > c1) {
    if (b3 > c1) {
        console.log(a1,b3,c1);
    } else {
        console.log(a1,c1,b3);
    }
}
if (b3 > a1 && b3 > c1) {
    if (a1 > c1) {
        console.log(b3,a1,c1);
    } else {
        console.log(b3,c1,a1);
    }

} 
else if (c1 > a1 && c1 > b3) {
    if (a1 > b3) {
        console.log(c1,a1,b3);
    } else {
        console.log(c1,b3,a1);
    }
}