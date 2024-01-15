
const prompt = require('prompt-sync')();

// variavel hexadecimal
let x = 0xaa;

// variavel octal
let y = 0o22;

// variavel com notação cientifica
let z = 48.0008e3;
console.log(x);
console.log(y);
console.log(z);

var marvin = "robot";
switch (marvin) {
    case "human":
        console.log("hello carbon unit!");
        break;
    case "alien":
        console.log("brrr I hate aliens!");
        break;
    case "robot":
        console.log("emergency, to the rescue!");
        break;
    default:
        console.log("what are you?");
        break;
}

function Carro(modelo, marca, ano, motor) {
    this.modelo = String(prompt(`Informe o modelo: `));
    this.ano = parseInt(prompt(`Informe o ano: `));
    this.motor = parseFloat(prompt(`Informe o motor: `));
}
// Depois para instanciar um objeto, basta usar:
let car = new Carro(this.modelo, this.ano, this.motor);
// Agora car já possui todos os atributos com dados:
console.log("Carro: " + car.modelo, +car.ano, +car.motor);



let distancia = (prompt(`Informe a distancia: `))

function calc_consumo(distancia) {
    return distancia / (15 / this.motor);
}

car.consumo = calc_consumo;

let gas = car.consumo(distancia);
console.log(gas);