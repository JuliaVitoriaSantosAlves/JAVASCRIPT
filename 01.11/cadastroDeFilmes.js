/* Um código que cadastre filmes contendo as seguintes chaves:
nome do filme, duração(hh/mm/ss), gênero

a pegadinha: deve-se cadastrar pelo menos 2 gêneros por filme em um novo objeto com as chaves id e genero
*/

const prompt = require('prompt-sync')();

const filme = {
    genero: {}
}

while (true) {
    const titulo = prompt(`Informe o titulo do filme: `);
    filme.titulo = titulo;

    const duracao = prompt(`Informe a duração do filme: `);
    filme.duracao = duracao;

    for (let i = 0; i < 2; i++) {
        const genero = prompt(`Informe o genero do filme: `);
        filme.genero[i] = genero;
    }

    const saida = prompt(`Digite S para salvar `);
    if (saida.toLocaleLowerCase()=== `s`) {
        console.log(`Fim do cadastro`);
        break
    }
}

console.table(filme);