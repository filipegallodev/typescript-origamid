const button = document.querySelector("button");
const config = localStorage.getItem("config");

if (button !== null) {
  button.click();
}

if (button) {
  button.click();
}

button?.click();

console.log(typeof null);

let total;

console.log(total);
console.log(typeof total);

if (total) {
  console.log("Total foi definido");
} else {
  console.log("Total não foi definido");
}

interface Produto {
  nome?: string;
}

const jogo: Produto = {
  nome: "Ragnarok",
};

const livro: Produto = {};

jogo.nome?.toLowerCase();
livro.nome?.toLowerCase();

if (jogo.nome) {
  jogo.nome.toLowerCase();
}
