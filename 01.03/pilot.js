/* Fazer uma estrutura que calcule a media das 03 notas do aluno e informe se o mesmo, passou de ano ou vai repetir 
nota1, nota2 e nota3
media é 7
*/

const nota1 = prompt('Informe a primeira nota: ')
const nota2 = prompt('Informe a segunda nota: ')
const nota3 = prompt('Informe a terceira nota: ')

const media = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3
console.log(media)
if (media >= 7) {
    console.log('Parabéns você foi aprovado.')
} else {
    console.log('Você está reprovado!')
}

//  condicional é uma estrutura que valida uma condição de verdade
// if | else
/* 
if ( condição ) {
    codigo que sera executado
} else {
    codigo que sera executado
}
*/

let numero1 = 10
let numero2 = 20

if ( numero1 < numero2 ) {
    console.log('Numero 01 é menor')
} else {
    console.log('Numero 02 é menor')
}

const valor1 = 31
const valor2 = 59

const multiplicacao = valor1 * valor2

console.log(multiplicacao);

const prompt = require('prompt-sync')()

const idade = prompt('Qual sua idade? ')

if ( idade >= 18 && idade < 60 ) {
    console.log('Você é adulto')
} else if ( idade > 0 && idade < 12 ) {
    console.log('Você é criança')
} else if ( idade >= 12 && idade <= 17 ) {
    console.log('Você é adolecente')
} else if ( idade >= 60 ){
    console.log('Você é idoso')
} else {
    console.log('Impossivel identificar sua faixa')
}