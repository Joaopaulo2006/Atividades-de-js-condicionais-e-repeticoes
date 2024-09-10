alert("12) Escreva um algoritmo que leia o número de identificação, as 3 notas obtidas por um aluno nas 3 verificações e a média dos exercícios que fazem parte da avaliação, e calcule a média de aproveitamento, usando a fórmula: MA := (nota1 + nota 2 * 2 + nota 3 * 3 + ME)/7. A atribuição dos conceitos obedece a tabela abaixo. O algoritmo deve escrever o número do aluno, suas notas, a média dos exercícios, a média de aproveitamento, o conceito correspondente e a mensagem 'Aprovado' se o conceito for A, B ou C, e 'Reprovado' se o conceito for D ou E. Média de aproveitamento Conceito: >= 90 A; >= 75 e < 90 B; >= 60 e < 75 C; >= 40 e < 60 D; < 40 E")



let id = parseInt(prompt("Insira o ID do aluno"));
let nota1 = parseFloat(prompt("Digite a primeira nota do aluno " + id + ": "));
let nota2 = parseFloat(prompt("Digite a segunda nota do aluno " + id + ": "));
let nota3 = parseFloat(prompt("Digite a terceira nota do aluno " + id + ": "));
let ME = parseFloat(prompt("Digite a Média dos exercícios: "));

let MA = (nota1 + (nota2 * 2) + (nota3 * 3) + ME)/7;
let conceito = "";
let estd = "";

if(MA >= 90) {
    conceito = "A";
} else if(MA >= 75 && MA < 90) {
    conceito = "B";
} else if(MA >= 60 && MA < 75){
    conceito = "C";
} else if(MA >= 40 && MA < 60) {
    conceito = "D"
} else {
    conceito = "E";
}

if(conceito == "A" || conceito == "B" || conceito == "C") {
    estd = "Aprovado";
} else {
    estd = "Reprovado";
}

console.log("ID: #" + id + '\n' + "Nota: " + nota1.toFixed(2) + " | " + nota2.toFixed(2) + " | " + nota3.toFixed(2) + " | " + '\n' + "Media de exercícios: " + ME.toFixed(2) + '\n' + "Media de Aproveitamento: " + MA.toFixed(2) + '\n' + "Conceito correspondente: " + conceito + '\n' + "Estado: " + estd);

