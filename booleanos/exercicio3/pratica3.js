//Agora é a sua vez! Resolva os exercícios abaixo:

//!1. Verifique se um número é maior que 10 e menor que 20.
let numero = 15;
if (numero > 10 && numero < 20) {
    console.log("o numero esta entre 10 e 20");
}

//?2. Crie um código que verifique se uma pessoa pode votar. Considere idade >= 16.
let idadePessoa = 18;
if (idadePessoa >= 16) {
    console.log("pode votar");
}
//*3. Implemente um sistema de notas onde:
   // - Notas >= 90: "Aprovado com A"
   // - Notas >= 70 e < 90: "Aprovado com B"
    //- Notas < 70: "Reprovado".
    let notaAluno = 71;
    if (notaAluno >= 90) {
        console.log("Aprovado com A");
    } else if (notaAluno >= 70 && notaAluno < 90) {
        console.log("Aprovado com B");
    } else {
        console.log("Reprovado");
    }
    
//?4. Crie uma variável `saldo` e verifique:
    //- Se `saldo > 0`: Mostre "Saldo positivo".
    //- Se `saldo === 0`: Mostre "Sem saldo".
    //- Caso contrário, mostre "Saldo negativo".
    let saldoConta = 10;
    if (saldoConta > 0) {
        console.log("saldo positivo");
    } else if (saldoConta === 0) {
        console.log("sem saldo");
    } else {
        console.log("saldo negativo");
    }
    
//!5. Use o operador `!` para verificar se uma luz está apagada e ligue-a.
let luzEstaAcesa = false;
if (!luzEstaAcesa) {
    console.log("ligando a luz");
}
