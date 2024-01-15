function calc_consumo(distancia) {
    return distancia / (15 / this.motor);
    car.consumo = calc_consumo;
    var gas = car.consumo(200);
}