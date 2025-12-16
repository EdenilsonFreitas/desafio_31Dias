//? ### **📌 Introdução**

//Bem-vindo ao **oitavo dia do desafio!** 🎉 Hoje vamos explorar as **matrizes**, uma extensão dos arrays que permite armazenar dados em múltiplas dimensões.

//Se um **array** é uma lista de itens, uma **matriz** é como uma tabela: você organiza os dados em linhas e colunas. Matrizes são extremamente úteis quando precisamos trabalhar com dados mais complexos, como em jogos, gráficos ou planilhas.

//! ### **📚 O Que é uma Matriz?
//? Uma matriz é um array de arrays, ou seja, um array onde cada elemento também é um array.

//? ### **  Exemplo no mundo real:💡
// - Um **tabuleiro de xadrez**, onde cada célula é identificada por uma linha e uma coluna.
//? Uma **planilha do Excel**, com células organizadas em linhas e colunas.
// Exemplo no código:
let matriz = [
  [1, 2, 3], // Linha 0
  [4, 5, 6], // Linha 1
  [7, 8, 9], // Linha 2
];
console.log(matriz[0][0]); // Acessa o elemento na linha 0, coluna 0 (resultado: 1)

//? ### **🔄 Criando Matrizes Dinamicamente**

//Você pode criar uma matriz de forma dinâmica usando loops:
let linhas = 3;
let colunas = 3;
let matriz2 = [];

for (let i = 0; i < linhas; i++) {
  matriz2[i] = [];
  for (let j = 0; j < colunas; j++) {
    matriz2[i][j] = i + j;  // Exemplo: Soma dos índices
  }
}

console.log(matriz2);
// Saída:
// [
//   [0, 1, 2],
//   [1, 2, 3],
//   [2, 3, 4]
// ]
//? ### **Métodos Úteis para Matrizes🔍
//Embora os métodos nativos de arrays também funcionem em matrizes, você frequentemente precisará de loops para manipulá-las.

//? ### **1. Iterar Sobre uma Matriz📝
let matriz3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < matriz3.length; i++) {
  for (let j = 0; j < matriz3[i].length; j++) {
    console.log(`Elemento [${i}][${j}]: ${matriz3[i][j]}`);
  }
}
//? ### **2.  Somar Todos os Elementos➕
let matriz4 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let soma = 0;
for (let i = 0; i < matriz4.length; i++) {
  for (let j = 0; j < matriz4[i].length; j++) {
    soma += matriz4[i][j];
  }
}

console.log(`Soma total: ${soma}`);  // Saída: 45
//? ### **3. Encontrar o Maior Valor📌
let matriz5 = [
  [1, 20, 3],
  [4, 5, 6],
  [7, 8, 90]
];

let maior = matriz5[0][0];
for (let i = 0; i < matriz5.length; i++) {
  for (let j = 0; j < matriz5[i].length; j++) {
    if (matriz5[i][j] > maior) {
      maior = matriz5[i][j];
    }
  }
}

console.log(`Maior valor: ${maior}`);  // Saída: 90
//? ### **Exemplos Práticos🚀
//? ### **Tabuleiro de Xadrez:**
let tabuleiro = [];
for (let i = 0; i < 8; i++) {
  tabuleiro[i] = [];
  for (let j = 0; j < 8; j++) {
    tabuleiro[i][j] = (i + j) % 2 === 0 ? "⬜" : "⬛"; // Branco ou preto
  }
}
console.log(tabuleiro);