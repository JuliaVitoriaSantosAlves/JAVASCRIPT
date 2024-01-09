console.log ("Atribuição de variaveis");

//const é imutavel
const idade = 22;
//let varia
let nome = "Júlia ";
const sobrenome = "Santos";

console.log ("Meu nome é "+nome+ sobrenome + ", tenho",+idade+" anos");

//ou mais fácil ainda
console.log (`Meu nome é ${nome}${sobrenome} e tenho ${idade} anos`);

nome = nome + sobrenome;
console.log(nome);

//contadores

let contador = 0;
contador = contador+2;
console.log(contador);
contador = contador+2;
console.log(contador);
contador = contador+2;
console.log(contador);
contador = contador+2;
console.log(contador);
contador = contador+2;
console.log(contador);
contador = contador+2;
console.log(contador);