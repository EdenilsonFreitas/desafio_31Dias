//* ### ** 🎯 Exercícios Práticos**

//* 1. Crie uma função que calcule o dobro de um número.
function calculadorDobro(numero) {
    return numero * 2;
}
console.log(calculadorDobro(5)); // Exemplo de uso da função
//* 2. Escreva uma função que receba um nome e retorne uma mensagem de boas-vindas.
function mensagemBoasVindas(nome) {
    return `Bem-vindo. ${nome}!`;
}
console.log(mensagemBoasVindas("Edenilson")); // Exemplo de uso da função
//* 3. Crie uma função que receba dois números e retorne o maior deles.
function maiorNumero(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
console.log(maiorNumero(10,20)); // Exemplo de uso da função
//* 4. Implemente uma função que calcule a média de três números.
function calculadoraMedia(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}
console.log(calculadoraMedia(5,10,15)); // Exemplo de uso da função

//* 5. Crie uma função que receba um array de números e retorne a soma deles.
function somaArray(numeros) {
    return numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
}
console.log(somaArray([1,2,3,4,5])); // retorna 15

//* ### * | Passo | acumulador | valorAtual | resultado   |
//        | ----- | ---------- | ---------- | ----------- |
//        | 1     | 0          | 1          | 0 + 1 = 1   |
//        | 2     | 1          | 2          | 1 + 2 = 3   |
//        | 3     | 3          | 3          | 3 + 3 = 6   |
//        | 4     | 6          | 4          | 6 + 4 = 10  |
//       | 5     | 10         | 5          | 10 + 5 = 15 |


//* 6. Escreva uma função que receba uma string e retorne o número de caracteres dessa string.
function contarCaracteres(str) {
    return str.length;
}
console.log(contarCaracteres("Hello World")); // retorna 11 caracteres.