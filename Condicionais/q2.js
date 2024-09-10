alert("2) Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. Caso sexo seja “F” e estado civil seja “CASADA”, solicitar o tempo de casada (anos).");

let nome1 = String(prompt("Insira seu nome: "));
let sexo1 = String(prompt("Sexo: F ou M?"));
let EC1 = String(prompt("Insira seu Estado Civil: SOLTEIRO(A) , CASADO(A) , VUIVO(A)?"));

if(sexo1 == "F" || sexo1 == "f" && EC1 == "CASADA" || EC1 == "casada"){
    var tempo1 = parseInt(prompt("Tempo de casado(a): "));
}

console.log("Nome: " + nome1);
console.log("Sexo: " + sexo1);
console.log("Estado Civil: " + EC1);
console.log("Tempo de CASADO(A): " + tempo1);

