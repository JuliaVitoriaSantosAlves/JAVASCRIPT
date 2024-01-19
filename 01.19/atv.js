/* algoritmo que calcule o fatorial de um numero */

const prompt = require('prompt-sync')();

const calcFatorial = (n) => {
    let resultado = 1;
    
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    
    return resultado;
}

const n = Number (prompt(`Informe o número a ser fatorado: `));
const resultadoFinal = calcFatorial(n);
console.log(`O fatorial de ${n} é ${resultadoFinal}`);