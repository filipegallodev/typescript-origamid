export {};

import _ from "lodash";
import ClipboardJS from "clipboard";

const button = new ClipboardJS("button");

function handleCopy(event: ClipboardJS.Event) {
  event.clearSelection();
  console.log(event.text);
  console.log(event.action);
}

button.on("success", handleCopy);

console.log(_.difference([1, 45], [2, 1, 3]));

interface Produto {
  nome: string;
}

const livro: Produto = {
  nome: "O Senhor dos Anéis",
};
