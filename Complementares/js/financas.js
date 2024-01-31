const  dados = [];

function adicionar() {
    const ano = document.getElementById("ano").value;
    const mes = document.getElementById("mes").value;
    const gasto = document.getElementById("gasto").value;
    const valor = document.getElementById("valor").value;
    dados.push({ ano: ano, mes: mes, gasto: gasto, valor: valor });
    dados.sort(function (a, b) {
        if (a.ano < b.ano) {
            return -1;
        } else if (a.ano > b.ano) {
            return 1;
        } else {
            if (a.mes < b.mes) {
                return -1;
            } else if (a.mes > b.mes) {
                return 1;
            } else {
                if (a.valor < b.valor) {
                    return -1;
                } else if (a.valor > b.valor) {
                    return 1;
                } else {
                    return 0;
                }
            }
        }
    });
    atualizarTabela();
}

function atualizarTabela() {
    const tabela = document.getElementById("tabela");
    tabela.innerHTML = "";
    const cabecalho = document.createElement("tr");
    const th1 = document.createElement("th");
    const th2 = document.createElement("th");
    const th3 = document.createElement("th");
    const th4 = document.createElement("th");
    th1.appendChild(document.createTextNode("Ano"));
    th2.appendChild(document.createTextNode("Mês"));
    th3.appendChild(document.createTextNode("Gasto"));
    th4.appendChild(document.createTextNode("Valor"));
    cabecalho.appendChild(th1);
    cabecalho.appendChild(th2);
    cabecalho.appendChild(th3);
    cabecalho.appendChild(th4);
    tabela.appendChild(cabecalho);
    dados.forEach(function (item) {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        td1.appendChild(document.createTextNode(item.ano));
        td2.appendChild(document.createTextNode(item.mes));
        td3.appendChild(document.createTextNode(item.gasto));
        td4.appendChild(document.createTextNode("R$ " + item.valor.toFixed(2)));
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tabela.appendChild(tr);
    });
}