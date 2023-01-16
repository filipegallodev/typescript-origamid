// interface Produto {
//   nome: string;
//   preco: number;
//   novo: boolean;
// }

// let chave: keyof Produto;
// // let chave: "nome" | "preco" | "novo";

// chave = "novo";

// function coordenadas(x: number, y: number) {
//   return { x, y };
// }

// let coord: typeof coordenadas;

// coord = "teste";

// coord = (x: number, y: number) => {
//   return { x, y };
// };

interface Elementos {
  a: HTMLAnchorElement;
  video: HTMLVideoElement;
  div: HTMLElement;
  body: HTMLBodyElement;
  audio: HTMLAudioElement;
}

function selecionar<K extends keyof Elementos>(
  seletor: K
): Elementos[K] | null {
  return document.querySelector(seletor);
}

selecionar("a");
selecionar("video");
