const lista = [];

function adicionar() {
    const valor = document.getElementById("valor").value;
    lista.push(valor);
    atualizarLista();
}

function atualizarLista() {
    const ul = document.getElementById("lista");
    ul.innerHTML = "";
    lista.forEach(function (item) {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(item));
        ul.appendChild(li);
    });
}