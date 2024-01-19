const pessoa = {
    saudacao1: `Bom dia!`,
    saudacao2: `Boa tarde!`,
    saudacao3: `Boa noite!`,
    falar() {
        console.log(this.saudacao1);
    }
}

pessoa.falar();
const falar = pessoa.falar;

falar();
// conflito entre paradigmas: estruturada e OO.
//Esse falar não reconhece o this dentro do objeto//

// quando uma nova função que, quando chamada, tem sua palavra-chave this definida com o valor fornecido //
const falaPessoa = pessoa.falar.bind(pessoa);
falaPessoa();

function tempoFunc() {
    this.seg = 0;
    setInterval(
        function () {
            this.seg++;
            console.log(this.seg);
        }.bind(this), 1000 /* contado em minisegundo /
        o bind vem imediatamente apos a função */
    )
}

new tempoFunc;