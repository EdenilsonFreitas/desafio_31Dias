//? O Que é uma String?
//! uma String é basicamente um texto entre aspas.
//? Exemplo de String:
let nome = "João";
let sobrenome = "Marcos";
let frase = `ola, ${nome} ${sobrenome}!`;
console.log(frase);

//? Concatenar Strings:
let nome1 = "Edenilson";
let saudacao = "Olá, " + nome1 + "!"; // Usando +
let saudacao2 = `Olá, ${nome1}!`; // Usando template literals
console.log(saudacao); // Saída: Olá, Ana!
//? Acessar Caracteres:
//Cada caractere de uma string tem um índice, começando em 0:
let palavra = "Programação";
console.log(palavra[0]); // Saída: P
console.log(palavra[4]); // Saída: r

//! Obter o Tamanho da String:
let texto = "JavaScript";
console.log(texto.length); // Saída: 10

//? Formatando Texto:
let nome2 = "   ana silva   ";
console.log(nome2.trim().toUpperCase()); // Saída: ANA SILVA

//! Validando Strings:
let email = "usuario@gmail.com";
if (email.includes("@")) {
  console.log("Email válido!");
} else {
  console.log("Email inválido!");
}
//? Substituindo Palavras:
let mensagem = "Olá, João!";
let novaMensagem = mensagem.replace("João", "Maria");
console.log(novaMensagem); // Saída: Olá, Maria!
//? Verificando Começo e Fim:
let site = "www.exemplo.com";
console.log(site.startsWith("www")); // Saída: true
console.log(site.endsWith(".com")); // Saída: true

//! - **Strings são imutáveis:**

//Você não pode alterar diretamente um caractere de uma string.

let texto1 = "Olá";
texto1[0] = "A"; // Não funciona
console.log(texto); // Saída: Olá

//? Use métodos encadeados para manipulação eficiente:
let texto2 = "  Olá, mundo!  ";
console.log(texto2.trim().toUpperCase());  // Saída: OLÁ, MUNDO!