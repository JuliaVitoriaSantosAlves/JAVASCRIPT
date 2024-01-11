const lista1 = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`];
let lista2 = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`];

console.log(lista2);

lista2 = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`];

console.log(lista1);
console.log(lista2[6]);

console.log(typeof (lista1));
console.log(lista1.length);


for (let i = 0; i < lista1.length; i++) {
    console.log(lista1[i]);
}

let lista3 = lista1;
console.log(lista3);

lista3.push(`k`);
lista3.push(`l`);
lista1.push(`m`);

// lista3 torna o const menos const

console.log(lista3);
console.log(lista1);

lista3.pop();
console.log(lista3);
console.log(lista1);

lista1.unshift(`z`);
lista3.unshift(`x`);

console.log(lista3);
console.log(lista1);

let retorno = lista1.shift();
console.log(retorno);

// apontamento, lista3 é apenas uma copia, um atalho, para lista1.
// em realidade a lista3 sequer existe.