//! Exercícios Práticos
//* Crie um array com suas três cores favoritas e adicione uma nova cor no final.
let coresFavoritas = ['azul', 'verde', 'vermelho'];
coresFavoritas.push('amerelo');
console.log(coresFavoritas);
//!# Use um loop para exibir todos os itens de um array de compras.
let compras = ['arroz', 'feijão', 'macarrão', 'leite'];
for (let i = 0; i < compras.length; i++) {
    console.log(compras[i]);
}
//? Dado um array de números [10, 20, 30, 40, 50], use o método slice para extrair os dois últimos números.
let numeros = [10, 20, 30, 40, 50];
let ultimosNumeros = numeros.slice(-2);
console.log(ultimosNumeros); // Output: [40, 50]

//* Crie um array de tarefas e remova a primeira tarefa usando shift.
let tarefas = ['lavar a louça', 'fazer o jantar', 'estudar JavaScript'];
tarefas.shift();
console.log(tarefas);

//? Use splice para substituir o terceiro item de um array por "Substituído".
let carros = ['Ford', 'Chevrolet', 'Toyota', 'Honda'];
carros.splice(2, 1, 'Substituído');
console.log(carros);

//*6. Transforme um array de palavras em uma frase completa usando `join`.
let palavras = ['JavaScript', 'é', 'uma', 'linguagem', 'incrível'];
let frase = palavras.join(' ');
console.log(frase);