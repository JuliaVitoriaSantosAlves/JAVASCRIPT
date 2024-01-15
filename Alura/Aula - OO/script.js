class Cliente {
    nome;
    cpf;
    rg;
}

class ContaCorrente {
    agencia;
    saldo;
}

const cliente1 = new Cliente ();
const cliente2 = new Cliente ();
const cliente3 = new Cliente ();

cliente1.nome = `Júlia`;
cliente1.cpf = 1112223344;
cliente1.rg = 2839627;

cliente3.nome = `Alice`;
cliente3.cpf = 1113566645;
cliente3.rg = 3868877;

const ContaCorrenteJulia = new ContaCorrente();
const ContaCorrenteAlice = new ContaCorrente();

ContaCorrenteJulia.saldo = 0;
ContaCorrenteJulia.agencia = 404;

console.log(ContaCorrenteJulia);

ContaCorrenteJulia == 200;

let valorSacado = 100;

ContaCorrenteJulia.saldo -= valorSacado;
console.log(ContaCorrenteJulia);

ContaCorrenteAlice.agencia = 404;
ContaCorrenteAlice.saldo = 0;

console.log(cliente1,cliente2);