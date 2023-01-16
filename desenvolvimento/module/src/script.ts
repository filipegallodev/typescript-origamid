import pluginSlide from "./pluginSlide.js";
import { Produto, URL_BASE } from "./global.js";

pluginSlide("div");

console.log(URL_BASE);

const livro: Produto = {
  nome: "O Senhor dos Anéis",
  preco: 100,
};
