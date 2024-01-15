/* operadores do ternario:
? e :
*/

// if normal
let meuBoleano = true;

if (meuBoleano) {
    console.log(`É verdade.`);
} else {
    console.log(`Mentira sua.`);
}

//if ternario

meuBoleano ? console.log(`É a verdade`) : console.log(`Mentira sua`);
// interrogação representa VERDADE, quando a condição é atendida.

outroBoleano = false;

outroBoleano ? console.log(`Verdade`) : console.log(`Mentira`);
// nesse segundo exemplo, o retorno será o else pois o outroBoleano é um arquivo false; seu conrrespondende portanto é o else.

let vendas = 3000;
let gratificacao = (3000*13)/100;

if (gratificacao <= vendas) {
    console.log(`Parabens, você receberá uma gratificação de ${gratificacao}`);
} else {
    console.log(`Você atingiu a venda minima, mas sempre há o trimestre que vem. Mantenha o foco!`);
}

const extra = vendas >= 3000 ? `Você receberá seu extra` : `Você não atingiu a meta primaria`;
console.log(extra);

let nota = 5.5;
const resultado = nota >=8.0 ? `Aprovadissimo` : nota < 5.0 ? `Reprovadissimo` : `Vergonha da profission\n Seu coisinha mais ou menos`
console.log(resultado);

const prompt = require('prompt-sync')();

const nome = prompt(`Informe seu nome: `).toLowerCase();

const funcao = nome === `paulo` ? `Professor` : nome === `alice` ? `Aluna` : nome === `julia` ? `Aluna` : `Não identificado`;
console.log(funcao);