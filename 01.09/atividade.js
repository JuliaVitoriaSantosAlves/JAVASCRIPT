/* pergunte a idade, se for menor de idade.
se for menor; sinal quebra */

const prompt = require('prompt-sync')();

while (true) {
    let idade = (prompt(`Informe sua idade`))
    if (idade >= 0 && idade < 17) {
        console.log(`Você é uma criança de ${idade} anos e não terá acesso ao sistema`);
        break
    } else if (idade >= 18) {
        console.log(`Bem-vindo(a)`);
    }
}