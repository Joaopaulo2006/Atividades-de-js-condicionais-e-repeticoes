alert("9) Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas: para homens: (72.7 * h) – 58; para mulheres: (62.1 * h) – 44.7.");



let s = String(prompt("Diga seu Sexo(homem ou mulher): "));
let h2 = parseFloat(prompt("Diga sua altura: "));
let pesoI = 0;
if(s == "homem") {
   pesoI = (72.7 * h2) - 58;
} else {
    pesoI = (62.1 * h2) - 44.7;
}
console.log("Seu peso ideal: " + pesoI.toFixed(2));

