alert("7) Escrever um algoritmo que leia um valor para uma variável N de 1 a 10 e calcule a tabuada de N. Mostre a tabuada na forma: 0 x N = 0, 1 x N = 1N, 2 x N = 2N, ..., 10 x N = 10N.");



var Multp = [];
var n = prompt("Escolha um numero entra 1 e 10");
    for(var i = 0; i <= 10; i++){
        if(n <= 0 || n > 10){
            console.log("Numero invalido "  + n + ".");
            break;
        }
        Multp.push(n * i);
        console.log(i + " X " + n + " = " + Multp[i]);
    }

    setTimeout(() => {
        location.reload();
    }, 5000);