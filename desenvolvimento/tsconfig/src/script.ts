import plugin from "./plugin.js";

const teste = "teste";

// Ativa o plugin
plugin();

interface Produto {
  nome: string;
  preco: number;
}

function handleProduto(dados: Produto) {
  dados;
}

const link = document.querySelector("a");
if (link) {
  link.innerHTML = "Teste";
}

function handleClick(this: HTMLElement) {
  console.log(this);
}

document.documentElement.addEventListener("click", handleClick);

function trocarModo(modo: string) {
  if (modo === "dark") return "color: black;";

  return "color: white";
}

trocarModo("light");

function maiuscula(frase: string) {
  console.log(frase);
  const total = 100;
}
