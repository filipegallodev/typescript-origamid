type Produto = {
  preco: number;
};

type Carro = {
  rodas: number;
  portas: number;
};

type Livro = {
  paginas: number;
};

function handleProdutoCarro(dados: Carro & Produto) {
  console.log(dados.rodas);
  console.log(dados.portas);
  console.log(dados.preco);
}

handleProdutoCarro({ rodas: 4, portas: 2, preco: 300000 });

type TipoCarro = {
  rodas: number;
  portas: number;
};

type TipoCarroComPreco = TipoCarro & {
  preco: number;
};

interface InterfaceCarro {
  rodas: number;
  portas: number;
}

interface InterfaceCarro {
  preco: number;
}

function handleInterfaceCarro(carro: InterfaceCarro) {
  console.log(carro);
}
