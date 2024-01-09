const prompt = require(`prompt-sync`)();

let num;
num = prompt(`Informe um número:`);

if (num == 1) {
    console.log(`Domingo`);
} else if (num == 2) {
    console.log(`Segunda-feira`);
} else if (num == 3) {
    console.log(`Terça-feira`);
} else if (num == 4) {
    console.log(`Quarta-feira`);
} else if (num == 5) {
    console.log(`Quinta-feira`);
} else if (num == 6) {
    console.log(`Sexta-feira`);
} else if (num == 7) {
    console.log(`Sabado`);
} else {
    console.log(`Insira um número válido(entre 1 e 7)`);
}

switch (num) {
    case 1:
        console.log(`Domingo`);
        break
    case 2:
        console.log(`Segunda-feira`);
        break
    case 3:
        console.log(`Terça-feira`);
        break
    case 4:
        console.log(`Quarta-feira`);
        break
    case 5:
        console.log(`Quinta-feira`);
        break
    case 6:
        console.log(`Sexta-feira`);
        break
    case 7:
        console.log(`Sabado`);
        break
    default:
        break;
}