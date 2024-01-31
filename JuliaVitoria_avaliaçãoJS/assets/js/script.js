let consultas = [];

function adicionarConsulta() {
    let nome = document.getElementById("nome").value;
    let data = document.getElementById("data").value;
    let hora = document.getElementById("hora").value;

    consultas.push({ nome: nome, data: data, hora: hora });

    atualizarTabela();
}

function excluirConsulta(index) {
    consultas.splice(index, 1);

    atualizarTabela();
}

function atualizarTabela() {
    let tabela = document.getElementById("consultas").getElementsByTagName('tbody')[0];
    tabela.innerHTML = "";

    consultas.sort(function (a, b) {
        return new Date(a.data + "T" + a.hora) - new Date(b.data + "T" + b.hora);
    });

    for (let i = 0; i < consultas.length; i++) {
        let consulta = consultas[i];

        let linha = tabela.insertRow(-1);
        let colunaNome = linha.insertCell(0);
        let colunaData = linha.insertCell(1);
        let colunaHora = linha.insertCell(2);
        let colunaExcluir = linha.insertCell(3);

        colunaNome.innerHTML = consulta.nome;
        colunaData.innerHTML = consulta.data;
        colunaHora.innerHTML = consulta.hora;

        let botaoExcluir = document.createElement("button");
        botaoExcluir.innerHTML = "Excluir";
        botaoExcluir.onclick = function () { excluirConsulta(i); };
        colunaExcluir.appendChild(botaoExcluir);
    }
}
