//!### **🎯 Exercícios Práticos**

//?Agora é sua vez! Resolva os exercícios abaixo:
/*
1. Escreva um código que exiba "Bom dia", "Boa tarde" ou "Boa noite" com base em um valor da variável `hora`.
2. Use um `switch` para exibir o nome de um mês com base em um número (1 para Janeiro, 2 para Fevereiro, etc.).
3. Crie um programa que verifica se uma pessoa pode dirigir. Use a variável `idade` e mostre "Pode dirigir" ou "Não pode dirigir".
4. Use o operador ternário para verificar se uma variável `saldo` é maior que 0 e exiba "Saldo positivo" ou "Saldo negativo".
5. Escreva um programa que classifique números em "Positivo", "Negativo" ou "Zero".
6. Crie um sistema de opções para um caixa eletrônico: "1 - Sacar", "2 - Depositar", "3 - Saldo". Use `switch` para processar a escolha.
*/
//?1. Escreva um código que exiba "Bom dia", "Boa tarde" ou "Boa noite" com base em um valor da variável `hora`.
let hora = 14;
if(hora < 12){
    console.log("Bom dia");
} else if(hora < 18){
    console.log("Boa tarde");
} else { 
    console.log("Boa noite");
}

//?2. Use um `switch` para exibir o nome de um mês com base em um número (1 para Janeiro, 2 para Fevereiro, etc.).
let mes = 12;
switch(mes){
    case 1:
        console.log("Janeiro");
        break;
        case 2:
            console.log("Fevereiro");
            break;
            default:
                console.log("Outro mês");
}
//?3. Crie um programa que verifica se uma pessoa pode dirigir. Use a variável `idade` e mostre "Pode dirigir" ou "Não pode dirigir".
let idade =17;
if(idade >=18){
    console.log("Pode dirigir");
} else {
    console.log("Não pode dirigir");
}
//?4. Use o operador ternário para verificar se uma variável `saldo` é maior que 0 e exiba "Saldo positivo" ou "Saldo negativo".
let saldo = 0.50;
let statusSaldo = saldo > 0 ? "Saldo positivo" : "Saldo Negativo";
console.log(statusSaldo);
//?5. Escreva um programa que classifique números em "Positivo", "Negativo" ou "Zero".
let numero = -1;
if(numero > 0){
    console.log("Positivo");
} else if(numero < 0){
    console.log("negativo");
}
//?6. Crie um sistema de opções para um caixa eletrônico: "1 - Sacar", "2 - Depositar", "3 - Saldo". Use `switch` para processar a escolha.
let opcao = 4;
switch(opcao){
    case 1:
        console.log("Sacar");
        break;
        case 2:
            console.log("Depositar");
            break;
            case 3:
                console.log("Saldo");
                break;
                default:
                    console.log("Opção inválida");
}