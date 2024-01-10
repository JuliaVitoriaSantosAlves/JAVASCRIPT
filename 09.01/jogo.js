const prompt = require('prompt-sync')();

const opcoes = parseInt (prompt(`Escolha: Novo jogo(1), Continuar(2), configurações (3) ou sair (4)`));

switch (opcoes) {
    case 1:
        console.log(`Novo jogo.`);
        break;
    case 2:
        console.log(`Continuação`);
        break;
    case 3:
        console.log(`Configurações`);
        break;
    case 4:
        console.log(`Sair`);
        break;
}