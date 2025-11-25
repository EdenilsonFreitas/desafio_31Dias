//? o Que são laçõs de Repetição?
// Laços de repetição, ou loops, são usados para executar um bloco de código várias vezes, com base em um condição.

//! Tipos de Loops no JavaScript
// 1. for
// 2. while
// 3. do...while
// 4. for...in
// 5. for...of

//? for

for(let escada = 1; escada <=10; escada++){
    console.log('Subindo a escada ' + escada);
}

for(let bolo = 1; bolo <=30; bolo++){
    console.log('partindo o bolo para os convidados ' +bolo);
}
for(let copo = 1; copo <=5; copo++){
    console.log('enchendo o copo ' +copo);
}

//? while
// O loop While repete o código enqunto a condição for verdadeira.

let contador = 0;
while(contador < 3){
    console.log(`Contador: ${contador}`);
    contador++;
}

//? do...while

// Semelhante ao while, mas garante que o código seja executado pelo menos uma vez antes do verificador a condição.

let numero = 0;
do{
    console.log(`Executando...`);
    numero--;
}while(numero > 5);
// controlando o Loop. Interrompe o loop antes de completar todas as iterações.
//? break
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}
// Saída: 0, 1, 2, 3, 4

//? continue
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}
// Saída: 0, 1, 3, 4
// Exemplos práticos usando Arrays
let frutas = ['maçã', 'banana', 'laranja'];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);

}
//! Somando numeros de 1 a 10:
let soma = 0;
for(let i = 1; i <=10; i++){
    soma += i;
}
console.log(`Soma Total: ${soma}`);

//? Buscando um Valor em uma Lista:
let numeros = [3, 8, 12, 5, 10];
let busca = 12;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === busca) {
    console.log(`Número ${busca} encontrado na posição ${i}!`);
    break;
  }
}
// Saída: Número 12 encontrado na posição 2!

//! Validando Dados com while:
//let senha = "1234";
//let tentativa;

//do {
  //tentativa = prompt("Digite a senha:");
//} while (tentativa !== senha);

//console.log("Senha correta! 🎉");

// tentativa

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const senha = "1234";

function perguntar() {
  readline.question("Digite a senha: ", (tentativa) => {
    if (tentativa === senha) {
      console.log("Senha correta! 🎉");
      readline.close();
    } else {
      console.log("Senha incorreta. Tente novamente.");
      perguntar();
    }
  });
}

perguntar();

