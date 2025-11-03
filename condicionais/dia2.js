let hora = 20;

if (hora < 12) {
  console.log("Bom dia! ☀️");
} else if (hora < 18) {
  console.log("Boa tarde! 🌤️");
} else {
  console.log("Boa noite! 🌙");
}

// switch case
let diaSemana = 25;
switch (diaSemana) {
    case 1:
        console.log("Segunda-feira");
        break;
        case 2:
        console.log("Terça-feira");
        break;
        case 3:
            console.log("Quarta-feira");
            break;
            default:
                console.log("outro dia");
}

//? ### **⚡ Operador Ternário**

//! Se você precisa fazer uma decisão simples, o operador ternário é perfeito. Ele é como um `if` resumido:
let idade = 17;
let podeDirigir = idade >= 18 ? "pode dirigir" : "não pode dirigir";
console.log(podeDirigir);

//! Verificando par ou ímpar
let numero = 7;

if (numero % 2 === 0) {
  console.log(`${numero} é par.`);
} else {
  console.log(`${numero} é ímpar.`);
}

//!Classificando Notas:
let nota = 85;

if (nota >= 90) {
  console.log("Aprovado com A! 🏆");
} else if (nota >= 70) {
  console.log("Aprovado com B.");
} else {
  console.log("Reprovado. 😔");
}

