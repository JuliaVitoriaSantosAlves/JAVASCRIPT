const prompt = require('prompt-sync')();

/* função literal
function func01() {
    return 45 + 89;
}

// armazenar uma função em um variavel
const func02 = function () {
    return `Função 02`;
}
// um nomezinho pra ela por associação

//armazenar uma função em uma Array

const minhaArray = [function (a, b) { return a + b }, func01, func02];
console.log(minhaArray[0](8, 9));
console.log(minhaArray[1]());
console.log(minhaArray[2]());

// armazenar uma função em atributo de objeto

const objeto = {};

objeto.falar = function () {
    return `Opa!`
}
console.log(objeto.falar());

//função como parametros de uma função

function run(func03) {
    func03();
}
run(function () {
    console.log(`Executando...`);
});


function run1(String) {
    let novaString = String;
    console.log(novaString);
}
run1(`AAAAAAAAAAAAA`);


function calculaSalario(funcoes, valor) {
    funcoes(valor);
}
calculaSalario(function (valor) {
    let impostos = valor * 0.03;
    let valorComImposto = valor + impostos;
    console.log(valorComImposto)
}, 1200);

calculaSalario(function (valor) {
    let impostos = valor * 0.5;
    let valorComImposto = valor + impostos;
    return valorComImposto;
});

function valores(a, b, c, d, e, f) {
    console.log(a + b);
    console.log(c - d);
    console.log(e * f);
    console.log(f + b);
}
valores(12, 14, 11, 13, 10, 15);

function calculadora() {
    return function soma(a, b) {
        console.log(a + b);
    }
}

console.log(calculadora()(5, 7)); */

function somar(a, b) {
    console.log(a + b);
}
module.exports = somar;
