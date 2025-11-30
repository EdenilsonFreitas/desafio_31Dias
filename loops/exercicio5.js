//? - ## Exercícios - Loops ##

//?1. Use um loop `for` para imprimir os números de 1 a 10 no console.
for(let i = 1; i <=10; i++){
    console.log(i);
}
//!2. Crie uma lista de nomes e use um `for` para exibir cada nome.
let nomes = [ "Ana", "Bruno", "Carla", "Daniel"];
for(let i =0; i < nomes.length; i++){
    console.log(nomes[i]);
}
//?3. Escreva um código que verifica se um número em um array é maior que 10. Pare de verificar assim que encontrar o primeiro.
let numeros = [4, 7, 12, 3, 9, 15];
for(let i = 0; i < numeros.length; i++){
    if(numeros[i] > 10){
        console.log(`Número maior que 10 encontrado: ${numeros[i]}`);
        break;
    }
}
//!4. Use um `while` para simular um contador de 10 a 0 e exiba "Lançamento!" quando atingir 0.
//let contador = 10;
//while(contador >=10){
  //  console.log(contador);
    //contador--;
//}
let contador = 10;

while (contador >= 0) {
  console.log(contador);
  contador--;
}




//?5. Escreva um loop que calcula o fatorial de um número (ex: `5! = 5*4*3*2*1`).


let fatorial = 5;
let resultado = 1;

for (let i = fatorial; i >= 1; i--) {
  resultado *= i;
}

console.log(resultado); // 120
