console.log("While e for");

const ListaDeDestino = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Fortaleza`,
    `Curitiba`
);

const IdadeComprador = 21;
const Acompanhada = false;
const passagemComprada = false;
const destino = `Fortaleza`;

const podeComprar = IdadeComprador >= 18 || Acompanhada == true;
const naoPodeComprar = IdadeComprador < 18 && Acompanhada == false;

let contador = 0;
let destinoExiste = false;

while (contador < 5) {
    if (ListaDeDestino[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log(`Destino existe: ${destinoExiste}`);

if (podeComprar && destinoExiste) {
    console.log(`Boa viagem`);
} else {
    console.log(`Sua compra não é possivel`);
}
for (let contador = 0; contador < 5; contador++) {
    if (ListaDeDestino[contador] == destino) {
        destinoExiste = true;
        console.log(`Boa viagem`);
        break
    }
}