// repetição que indique qual numero maior digitado pelo usuario
// obss: deve repetir no maximo 5 vezes

const prompt = require('prompt-sync')();

let maior = 0;
for (let cont = 1; cont <=5; cont++) {
    const num = parseFloat(prompt(`Informe o valor ${cont}/5 para comparação`));
    if (maior < num) {
        maior = num;
    }
}

console.log(`O numero ${maior} é o maior`);