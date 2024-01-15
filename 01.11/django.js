class Carne {
    nome;
    tipo;
    data;
    fazenda;
    preco;
}

const venda1 = new Carne ();
venda1.nome = `File`;
venda1.tipo = `Fresco`;
venda1.data = `11/dez`;
venda1.fazenda = `Azezinho do norte`;
venda1.preco = `R$12,00/kg`;

console.log(venda1);