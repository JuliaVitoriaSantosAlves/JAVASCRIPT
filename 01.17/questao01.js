const prompt = require('prompt-sync')();

function formatDate() {
  const dateString = prompt(`Informe uma data: `);
  const dateParts = dateString.split('/');
  const dia = parseInt(dateParts[0]);
  const mes = parseInt(dateParts[1]);
  const ano = parseInt(dateParts[2]);

  const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const mesName = meses[mes - 1];
  const anoString = ano;

  return `${dia} de ${mesName} de ${anoString}`;
}

console.log(`Sua data é ${formatDate()}`);