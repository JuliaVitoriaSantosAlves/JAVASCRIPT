// executa funções a cada elemente percorrido //

const repetentes = [`Aline`, `Felipe`, `Loogan`, `Zidane`];

repetentes.forEach (function (nome) {
    console.log(`${nome} é repetente.`);
});

repetentes.forEach (nome => console.log(nome));

const exibirRepetentes = repetentes => console.log(`Exibir ${repetentes}`);
repetentes.forEach(exibirRepetentes);