alert("11) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir para ler qual acondição de pagamento escolhida e efetuar o cálculo adequado. Código Condição de pagamento. 1 À vista em dinheiro ou cheque, recebe 10% de desconto. 2 À vista no cartão de crédito, recebe 15% de desconto. 3 Em duas vezes, preço normal de etiqueta sem juros. 4 Em duas vezes, preço normal de etiqueta mais juros de 10%.");



console.log("Produtos: " + '\n' + "| Caixa de chocolate |" + "| Detergente |" + "| Arroz |" + '\n' + "|   Feijao carioca   |" + "|  Farinha   |" + "| Agua  |" + '\n' + "|                  Nenhum                   |");
let prd, prc;
let n4 = String(prompt("Qual dos produtos listados deseja?: "));
let pgmt;
let val = 0;
let descnt = 0;
let fals = "";
if (n4 == "Caixa de chocolate") {
    console.log("A caixa de chocolate custa R$12.99");
    val = 12.99;
}

else if (n4 == "Detergente") {
    console.log("O Detergente custa R$5.70");
    val = 5.70;
}

else if (n4 == "Arroz") {
    console.log("O arroz R$10.99");
    val = 10.99;
}

else if (n4 == "Feijao carioca") {
    console.log("O Feijão carioca custa R$15.45");
    val = 15.45;
}

else if (n4 == "Farinha") {
    console.log("A Farinha custa R$9.00");
    val = 9;
}

else if (n4 == "Agua") {
    console.log("A Agua custa R$6.00");
    val = 6;
}

else if (n4 == "Nenhum" || n4 === "") {
    console.log("Nao quer nenhum dos produtos listados?");
    n4 = String(prompt("Digite o nome do seu produto: "));
    val = parseFloat(prompt("Digite o preço do seu produto: "));
    console.log(n4 + " - " + "R$" + val + "?");
} else {
    fals = "Produto nao registrado";
}
if (fals == "Produto nao registrado") {
    console.log("Produto nao registrado fim da compra");
} else {
    console.log("(Dinheiro ou cheque: 10% de desconto | crédito: 15% de desconto | Em duas vezes: com juros(10%) ou sem juros)");
    pgmt = String(prompt("Insira a forma de pagamento: "));

    if (pgmt == "Dinheiro" || pgmt == "cheque") {
        descnt = val - ((val / 100) * 10);
        console.log("Voce ira pagar o(a) " + n4 + " no " + pgmt + ": " + descnt.toFixed(2));
    } else if (pgmt == "crédito") {
        descnt = val - ((val / 100) * 15);
        console.log("Voce ira pagar o(a) " + n4 + " no " + pgmt + ": " + descnt.toFixed(2));
    } else if (pgmt == "Em duas vezes com juros") {
        descnt = (val + (val / 10)) / 2;
        console.log("Voce ira pagar o(a) " + n4 + " " + pgmt + ": " + descnt.toFixed(2));
    } else if (pgmt == "Em duas vezes sem juros") {
        descnt = val / 2;
        console.log("Voce ira pagar "+ n4 + " " + pgmt + ": " + descnt.toFixed(2));
    }
    else {
        console.log("Pagamento não efetuado compra cancelada >:(");
    }
}





