//? O que é um array?
//Um array é uma lista ordenada de valores que podem ser de qualquer tipo: números, strings, objetos, ou até outros arrays.
let frutas = ['maçã', 'banana', 'laranja'];
console.log(frutas);

//! Adicionar e remover elementos:
let lista = [ "caderno", "caneta", "borracha" ];
lista.push("lapis"); // Adiciona "lapis" ao final do array
lista.shift(); // Remove o primeiro elemento ("caderno")
console.log(lista);

//? Iterar Sobre um Array:
let numeros = [1,2,3,4,5];
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

// Encontrar um Elemento:
let frutas2 = ['maçã', 'banana', 'laranja'];
let indece = frutas2.indexOf('banana');
console.log(indece); // Saída: 1

//! Copiar Parte de um Array:
let numeros2 = [10, 20, 30, 40, 50];
let subArray = numeros2.slice(1, 4); // Copia do índice 1 ao 3
console.log(subArray);
// Saída: [20, 30, 40]

// Manipular Arrays com splice:
let lista2 = ["A", "B", "C"];
lista2.splice(1, 1, "X", "Y");
console.log(lista2);  // Saída: ["A", "X", "Y", "C"]

//Acessar o Último Elemento:
//? Use array[array.length - 1] para acessar o último elemento de um array.
let numeros3 = [5, 10, 15,];
console.log(numeros3[numeros3.length - 1]) // Saída: 15

//? Acessar um índice que não existe retorna undefined:
let frutas3 = ['maçã', 'banana'];
console.log(frutas3[5]); // Saída: undefined
