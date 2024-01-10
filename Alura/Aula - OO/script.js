class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}

const cliente1 = new Cliente ();
const cliente2 = new Cliente ();
const cliente3 = new Cliente ();

cliente1.nome = `Júlia`;
cliente1.cpf = 1112223344;
cliente1.agencia = 404;
cliente1.saldo = 0;
cliente1.rg = 2839627;

cliente2.nome = `Bea`;
cliente2.cpf = 1113334565;
cliente2.agencia = 404;
cliente2.saldo = 0;
cliente2.rg = 379327;

cliente3.nome = `Alice`;
cliente3.cpf = 1113566645;
cliente3.agencia = 404;
cliente3.saldo = 0;
cliente3.rg = 3868877;

console.log(cliente1,cliente2,cliente3);