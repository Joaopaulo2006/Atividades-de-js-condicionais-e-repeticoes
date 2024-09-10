alert("5) Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja negativo, imprimindo o resultado.");

let n2 = parseFloat(prompt("Insira um valor(caso positivo será multiplicado por dois e se negativo será multiplicado por três"));
let soma1 = 0;

if (n2 > 0) {
    soma1 = n2 * 2;
    console.log("Resultado do valor: " + n2 + " X " + "2" + " = " + soma1);
} else {
    soma1 = n2 * 3;
    console.log("Resultado do valor: " + n2 + " X " + "3" + " = " + soma1);
}