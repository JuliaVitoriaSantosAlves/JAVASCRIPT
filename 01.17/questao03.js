const prompt = require('prompt-sync')();

function checkNumber() {
    const num = parseInt(prompt(`Digite um número: `));
    if (num > 0) {
        return (`Positivo`);
    } else if (num < 0) {
        return (`Negativo`);
    } else {
        return (`Zero`);
    }
}

console.log(`Seu numero é ${checkNumber()}`);