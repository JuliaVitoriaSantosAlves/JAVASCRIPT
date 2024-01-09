console.log ("Listando");

const Salvador = `Salvador`;
const SaoPaulo = `São Paulo`;
const RioDeJaneiro = `Rio De Janeiro`;

//pratica ruim
console.log(`Destinos possiveis: ${Salvador}, ${SaoPaulo}, ${RioDeJaneiro}`);

const ListaDeDestino = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Fortaleza`
);

console.log(ListaDeDestino);

ListaDeDestino.push (`Curitiba`);

console.log(ListaDeDestino);

ListaDeDestino.splice(1,1);
console.log(ListaDeDestino);
console.log(ListaDeDestino[2]);
