let lista = [];

function adicionarValor() {
    let valor = document.getElementById("input").value;
    lista.push(valor);
    document.getElementById("input").value = "";
}

function ordenarValor() {
    lista.sort();
    let valores = lista.join(", ");
    let listaElement = document.getElementById("lista");
    listaElement.innerHTML = "";

    for (let i = 0; i < lista.length; i++) {
        let item = document.createElement("li");
        item.innerText = lista[i];
        listaElement.appendChild(item);
    }
}