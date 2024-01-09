console.log("Condicionais logicos");

const ListaDeDestino = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Fortaleza`,
    `Curitiba`
);

const IdadeComprador = 16;
const Acompanhada = true;

console.log(IdadeComprador > 18);
console.log(IdadeComprador < 18);
console.log(IdadeComprador <= 18);
console.log(IdadeComprador >= 18);
console.log(IdadeComprador == 18);

if (IdadeComprador >= 18 || Acompanhada) {
    console.log(`Destinos possiveis:\n ${ListaDeDestino}`);
} else {
    console.log(`Cresça mais um pouco.`)
}