const matriz = [];

function adicionar() {
    const valor = document.getElementById("valor").value;
    matriz.push(valor);
    matriz.sort();
    document.getElementById("matriz").value = matriz;
}