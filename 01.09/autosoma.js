const prompt = require('prompt-sync')();

let soma = 0;
let media = 0;
for (let i = 1; i <=3; i++) {
    const num = parseInt(prompt(`Informe o ${i}/3 valor para soma:`));
    soma = soma + num;
    media = soma / 3;
}

console.log(`A media foi: ${media}`);