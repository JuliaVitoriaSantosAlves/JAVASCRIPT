/* criar um codigo que solicite 10 número para o usuario e, ao final, informe quantos são pares e quantos são impares*/

const prompt = require('prompt-sync')();
let par = 0;
let impar = 0;

for (let i = 1; i <= 10; i++) {
    let numero =parseInt (prompt(`Informe o número ${i}/10: `));
    if (numero %2 == 1 ) {
        impar = impar +1
    } else {
        par = par + 1;
    }
}

console.log(`Foram digitados ${impar} números impares e ${par} números pares.`);