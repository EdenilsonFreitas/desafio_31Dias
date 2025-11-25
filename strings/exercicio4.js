//! ### **Exercícios Práticos**

//1. Crie uma variável com o nome completo de uma pessoa e exiba apenas o primeiro nome.
const nomeCompleto = "Marcos Palmeiras da Silva";
const primeiroNome = nomeCompleto.split(" ")[0];
console.log("primeiroNome:", primeiroNome);
//2. Verifique se uma string contém a palavra "Java" e exiba uma mensagem personalizada.
let frase = "Eu estou aprendndo JavaScript";
if (frase.includes("Java")) {
    console.log("A frase contém a palvra 'Java'.");
} else {
    console.log("A frase não comtém a palavra 'Java'.");
}
//3. Converta uma frase para letras maiúsculas e remova os espaços em branco nas extremidades.
let frase2 = " Ola, Mundo! ";
let fraseMaiuscula = frase2.toUpperCase().trim();
console.log("fraseMaiuscula:", fraseMaiuscula);
//4. Substitua a palavra "erro" por "correção" na string `"Houve um erro no sistema."`.
let frase3 = "Houve um erro no sistema.";
let fraseCorrigida = frase3.replace("erro", "correção");
console.log("fraseCorrigida:", fraseCorrigida);

//5. Divida a frase `"Eu amo JavaScript"` em palavras separadas e exiba cada uma.
let frase4 = "Eu amo JavaScript";
let palavras = frase4.split(" ");
console.log("palavras:", palavras);
//6. Valide se um URL começa com `https://` e termina com `.com`.
let url = "https://www.brisanet.com";
if (url.startsWith("https://") && url.endsWith(".com")) {
    console.log('O URL é válido.');
} else {
    console.log('O URL não é válido.');
}
