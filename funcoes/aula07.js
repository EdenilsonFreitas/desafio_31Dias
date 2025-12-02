//* O Que é uma Função?
// Uma função é um bloco de código que realiza uma tarefa específica. Você pode pensar nela como um mini-programa dentro do seu programa principal.

//? exemplo no código:
function saudacao(nome) {
  return `olá, ${nome}!`;
}
console.log(saudacao("Edenilson")); // Saída: olá, Edenilson!

//* Como criar Funções no JavaScript
//? 1. Declaração de Função (Function Declaration):
function somar(a, b) {
  return a + b;
}
console.log(somar(3, 5)); // Saída: 8

//* 2. Expressão de Função (Function Expression):

const multiplicar = function (a, b) {
  return a * b;
};
console.log(multiplicar(4, 6)); // Saída: 24

//* Arrow Function (ES6):
const dividir = (a, b) => a / b;
console.log(dividir(10, 2)); // Saída: 5
//? Dica: Use arrow functions para simplificar código curto e direto.

//* ### **🔄 Parâmetros e Retornos**

//**Funções com Parâmetros:**
//Parâmetros são como "ingredientes" que a função precisa para funcionar.
function cumprimentar(nome) {
  return `olá, ${nome}!`;
}
console.log(cumprimentar("Maria")); // Saída: olá, Maria!
//**Funções com Retorno:**
// Nem todas as funções precisam retornar um valor.

function exibirMensagem(mensagem) {
  console.log(mensagem);
}
exibirMensagem("Bem-vindo ao JavaScript!"); // Saída: Bem-vindo ao JavaScript!

//* ### **💡 Funções com Valor Padrão:
// Você pode definir valores padrão para os parâmetros.
function somar(a = 0, b = 0) {
  return a + b;
}
console.log(somar(5)); // Saída: 5 (b usa o valor padrão 0)

//* ### **📚 Funções de Alta Ordem
// Funções de alta ordem são aquelas que recebem outras funções como argumentos ou retornam funções.

//* ### **Exemplo:**
function calcular(a, b, operacao) {
  return operacao(a, b);
}

const somar1 = (a, b) => a + b;
const multiplicar1 = (a, b) => a * b;

console.log(calcular(5, 3, somar1)); // Saída: 8
console.log(calcular(5, 3, multiplicar1)); // Saída: 15

//* ### **📌  Exemplos Práticos
//**Calculadora Básica */
function calcular1(a, b, operacao) {
  switch (operacao) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return "Operação inválida";
  }
}

console.log(calcular1(10, 5, "+"));  // Saída: 15

//**Verificador Par ou Ímpar */
function parOuImpar(numero) {
    return numero % 2 === 0 ? "Par" : "Ímpar";
}
console.log(parOuImpar(7)); // Saída: Ímpar

//**Converter Temperatura: */
function celsiusParaFahrenheit(celsius) {
  return celsius * 9/5 + 32;
}

console.log(celsiusParaFahrenheit(25));  // Saída: 77

//* ### *Calcular Fatorial:* 
function fatorial(n) {
  if (n === 0) return 1;
  return n * fatorial(n - 1);
}

console.log(fatorial(5));  // Saída: 120

//* ### **Filtrar Números Positivos em um Array: *

function filtrarPositivos(array) {
  return array.filter(numero => numero > 0);
}

console.log(filtrarPositivos([-3, 5, -1, 8]));  // Saída: [5, 8]