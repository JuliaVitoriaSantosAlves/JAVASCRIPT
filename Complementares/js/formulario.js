const dados = [];

function adicionar() {
    const texto = document.getElementById("texto").value;
    const valor = document.getElementById("valor").value;
    dados.push({ texto: texto, valor: valor });
    atualizarTabela();
}

function pesquisar() {
    const busca = document.getElementById("busca").value;
    const resultados = dados.filter(function (item) {
        return item.texto.includes(busca);
    });
    atualizarTabela(resultados);
}

function atualizarTabela(resultados) {
    const tabela = document.getElementById("tabela");
    tabela.innerHTML = "";
    const cabecalho = document.createElement("tr");
    const th1 = document.createElement("th");
    const th2 = document.createElement("th");
    th1.appendChild(document.createTextNode("Texto"));
    th2.appendChild(document.createTextNode("Valor"));
    cabecalho.appendChild(th1);
    cabecalho.appendChild(th2);
    tabela.appendChild(cabecalho);
    if (resultados) {
        resultados.forEach(function (item) {
            const tr = document.createElement("tr");
            const td1 = document.createElement("td");
            const td2 = document.createElement("td");
            td1.appendChild(document.createTextNode(item.texto));
            td2.appendChild(document.createTextNode(item.valor));
            tr.appendChild(td1);
            tr.appendChild(td2);
            tabela.appendChild(tr);
        });
    } else {
        dados.forEach(function (item) {
            const tr = document.createElement("tr");
            const td1 = document.createElement("td");
            const td2 = document.createElement("td");
            td1.appendChild(document.createTextNode(item.texto));
            td2.appendChild(document.createTextNode(item.valor));
            tr.appendChild(td1);
            tr.appendChild(td2);
            tabela.appendChild(tr);
        });
    }
}
