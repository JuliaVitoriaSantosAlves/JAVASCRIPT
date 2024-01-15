/*
parametro: {} 
estrutura: chave: valor,
*/

let meuObjeto = {
    Nome: `Julia`,
    Sobrenome: `Santos`,
    Idade: 22
}

/* é criado vazio quando vai entrar em while ou for

fica:
let objetoTal = {}

objeto Tal = {
    chave: valor;
    chave: valor;
    chave: valor;
}
*/

console.log(meuObjeto);
console.log(Object.values(meuObjeto));
console.log(Object.keys(meuObjeto));

delete meuObjeto.Idade;

console.log(Object.values(meuObjeto));
console.table(Object.values(meuObjeto));

meuObjeto [`Idade`] = 22;
console.table(Object.values(meuObjeto));

const prompt = require('prompt-sync')();

const objetoTal = {
    nome: `Júlia`,
    /* nome: `João` */
}

/* chaves iguais, JS busca sempre a ultima leitura */

objetoTal.nome = `João`;

console.log(objetoTal.nome);