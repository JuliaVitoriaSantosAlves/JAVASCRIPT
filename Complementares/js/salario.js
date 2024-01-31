function calcular() {
    var horas = document.getElementById("horas").value;
    var valor = document.getElementById("valor").value;
    var salario = horas * valor;
    document.getElementById("salario").value = "R$ " + salario.toFixed(2);
}