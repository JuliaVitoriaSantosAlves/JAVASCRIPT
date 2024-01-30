const inputElement = document.querySelector('#input');
const fromElement = document.querySelector('#from');
const toElement = document.querySelector('#to');
const outputElement = document.querySelector('#output');
const converterElement = document.querySelector('#converter-btn');
const mensagemElement = document.querySelector('#mensagem');

function converterMedidas() {
    const fromValue = fromElement.value;
    const toValue = toElement.value;

    if (fromValue === toValue) {
        outputElement.value = inputElement.value;
        mensagemElement.textContent = "";
        return
    }

    let metros;
    switch (fromValue) {
        case 'm':
            metros = inputElement.value;
            break
        case 'km':
            metros = inputElement.value * 1000;
            break
        case 'cm':
            metros = inputElement.value / 100;
            break
        case 'mm':
            metros = inputElement.value / 1000;
            break
    }

    let resultado;
    switch (toValue) {
        case 'm':
            resultado = metros;
            break;
        case 'km':
            resultado = metros / 1000;
            break;
        case 'cm':
            resultado = metros * 100;
            break;
        case 'mm':
            resultado = metros * 1000;
            break;
    }

    output.value = resultado.toFixed(2)
    const fromLabel = fromElement.options[fromElement.selectIndex].text;
    const toLabel = toElement.options[toElement.selectIndex].text;
    const mensagem = `${inputElement.value} ${fromLabel} equivale a ${resultado.toFixed(2)} ${toLabel}`;
    mensagemElement.textContent = mensagem;
}

converterElement.addEventListener('click', converterMedidas);