alert("6) Escreva um algoritmo que lê dois valores booleanos (lógicos) e então determina se ambos são VERDADEIROS ou FALSOS.");


let b1 = prompt("Digite seu primeiro valor(VERDADEIRO OU FALSO): ");
let b2 = prompt("Digite seu Segundo valor(VERDADEIRO OU FALSO): ");

b1 = (b1.toLowerCase() === 'verdadeiro');
b2 = (b2.toLowerCase() === 'verdadeiro');

if(b1 && b2) {
    console.log("AMBOS SÃO VERDADEIROS ("+ b1 + ", " + b2 +")");
} else if(!b1 && !b2){
    console.log("AMBOS SÃO FALSOS ("+ b1 + ", " +b2 +")");
} else {
    console.log("Um é VERDADEIRO  e o outro é FALSO ("+ b1 + ", "+ b2 +")");
}