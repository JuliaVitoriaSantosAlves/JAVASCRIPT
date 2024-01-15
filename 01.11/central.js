const prompt = require('prompt-sync')();

function Atendimento(opcao) {
    switch (opcao) {
        case 1:
            console.log(`Planos disponiveis:\n A\nB\nC\nD\nE\n`);
            break;
        case 2:
            console.log(`Renovação de assinatura`);
            break;
        case 3:
            console.log(`Cancelamento`);
            break;
        case 4:
            console.log(`Boletos de pagamento`);
            break;
        case 5:
            console.log(`Redirecionar para atendente humano`);
            break;
        case 6:
            console.log(`Ouvidoria`);
            break;
        default:
            console.log(`Informe uma opção entre 1 e 6 para ser atendido`);
            break;
    }
}

console.log(`
Escolha:
(1) para ver nossos planos
(2) para renovação de assinatura
(3) para cancelar
(4) para acessar seus boletos de pagamentos
(5) para aguardar ser atendida por um atendente
(6) para entrar em contato com a ouvidoria.
`);

let opcao = parseInt (prompt(`Como posso atende-lo(a)? `));

Atendimento(opcao);