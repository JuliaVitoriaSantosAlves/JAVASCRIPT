/* joguinho acerte o numero

criar um game que o usuario deve acertar um numero pre-estabelecido
quando ele acertar, o jogo acaba e informar a quantidade de tentetivas*/

const prompt = require('prompt-sync')();

const numeroDourado = 14;
console.log(`O número está entre 0 e 20. \n Não inclua 0 à esquerda`);
let cont = 1;

while (true) {
    let numeroChutado = (prompt(`Seu palpite:`))
    if (numeroChutado == numeroDourado) {
        console.log(`Você acertou o número dourado, parabens`);
        break
    } else if (numeroChutado != numeroDourado) {
        console.log(`Infelizmente não. Tente novamente`);
        cont = cont + 1;
    }
    if (numeroChutado > numeroDourado) {
        console.log(`${numeroChutado} é maior que o número dourado`);
    } else {
        console.log(`${numeroChutado} é menor que o número dourado`);
    }
}

console.log(`Você acertou após ${cont} vezes`);