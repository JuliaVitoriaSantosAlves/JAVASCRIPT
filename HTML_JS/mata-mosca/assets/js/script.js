let altura = 0;
let largura = 0;

function tamanhoDoPalco() {
    let altura = window.innerHeight;
    let largura = window.innerWidth;

    console.log(altura, largura);
}
tamanhoDoPalco();

function imgRandomica() {
    let posicaoX = Math.floor(Math.random() * largura) - 90;
    let posicaoY = Math.floor(Math.random() * altura);

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    let mosquito = document.createElement('img');
    mosquito.src = "/HTML_JS/mata-mosca/assets/css/images/mosca.png"
    mosquito.className = tamanhoRandomico() + ' ' + ladoAleatorio();

    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    document.body.appendChild(mosquito);
}

function tamanhoRandomico() {
    let classe = Math.floor(Math.random() * 3);
    switch (classe) {
        case 0:
            return 'mosquito1';
        case 1:
            return 'mosquito2';
        case 2:
            return 'mosquito3';
    }
}

function ladoAleatorio() {
    let classe = Math.floor(Math.random() * 2);

    switch (classe) {
        case 0: return 'ladoA';
        case 1: return 'ladoB';
    }
}