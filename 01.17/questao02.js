const prompt = require('prompt-sync')();


function convertTime(hora, minuto) {
    let period = 'A.M.';
    if (hora >= 12) {
        period = 'P.M.';
    }
    if (hora > 12) {
        hora -= 12;
    }
    if (hora === 0) {
        hora = 12;
    }
    return `${hora}:${minuto} ${period}`;
}

while (true) {
    const hora = parseInt(prompt('Digite a hora (0-23):'));
    const minuto = parseInt(prompt('Digite os minutos (0-59):'));

    if (isNaN(hora) || isNaN(minuto) || hora < 0 || hora > 23 || minuto < 0 || minuto > 59) {
        console.log('Hora inválida!');
    } else {
        console.log(`A hora convertida é ${convertTime(hora, minuto)}`);
    }

    const repeat = prompt('Deseja converter outra hora? (S/N)').toUpperCase();
    if (repeat !== 'S') {
        break;
    }
}  