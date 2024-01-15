function maiorDeIdade(idade) {
    if (idade >= 18) {
        console.log(`Você é maior de idade.\nCuidado com os homi.`);
    } else {
        console.log(`Você é menor de idade`);
    }
}
const idade = Number (prompt(`Informe sua idade: `));
maiorDeIdade(idade);