const prompt = require('prompt-sync')();

const Estudante = {}

while (true) {
    const nome = (prompt(`Informe seu nome: `));
    Estudante.nome = nome;

    const sobrenome = (prompt(`Informe seu sobrenome: `));
    Estudante.sobrenome = sobrenome;

    const idade = Number(prompt(`Informe sua idade: `));
    Estudante.idade = idade;

    const turma = (prompt(`Informe sua turma: `));
    Estudante.turma = turma;

    const turno = (prompt(`Informe sua turno: `));
    Estudante.turno = turno;

    const saida = (prompt(`Digite S para sair `));
    if (saida.toLocaleLowerCase()=== `s`) {
        console.log(`Fim do cadastro`);
        break
    }
}

console.table(Estudante);