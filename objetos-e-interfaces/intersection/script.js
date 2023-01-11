"use strict";
function handleProdutoCarro(dados) {
    console.log(dados.rodas);
    console.log(dados.portas);
    console.log(dados.preco);
}
handleProdutoCarro({ rodas: 4, portas: 2, preco: 300000 });
function handleInterfaceCarro(carro) {
    console.log(carro);
}
