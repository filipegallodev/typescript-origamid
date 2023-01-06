class Produto {
  nome: string;
  preco: number;
  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }
  precoReal() {
    return `R$ ${this.preco}`;
  }
}

const livro = new Produto("A Guerra dos Tronos", 200);

console.log(livro);
console.log(livro instanceof Produto);

class Livro {
  autor: string;
  constructor(autor: string) {
    this.autor = autor;
  }
}

class Jogo {
  jogadores: number;
  constructor(jogadores: number) {
    this.jogadores = jogadores;
  }
}

function buscarProduto(busca: string) {
  if (busca === "O Hobbit") {
    return new Livro("J.R.R. Tolkien");
  }
  if (busca === "Dark Souls") {
    return new Jogo(1);
  }
  return null;
}

const produto = buscarProduto("O Hobbit");

console.log(produto);

if (produto instanceof Jogo) {
  console.log("É jogo");
} else if (produto instanceof Livro) {
  console.log("É livro");
  produto.autor;
}

const produto2 = buscarProduto("Dark Souls");

console.log(produto2);

if (produto2 instanceof Jogo) {
  console.log("É jogo");
} else if (produto2 instanceof Livro) {
  console.log("É livro");
  produto2.autor;
}
