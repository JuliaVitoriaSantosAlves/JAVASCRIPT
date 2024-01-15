const prompt = require('prompt-sync')();

while (true) {
    let media = 0;
    let nota = (prompt(`Informe sua nota`));
    if (nota == `sair`) {
        console.log(`Saindo...`);
        break
    } else {
        console.log(nota);
    }
}