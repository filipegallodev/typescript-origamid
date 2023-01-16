"use strict";
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
// // coord = "teste";
// coord = (x: number, y: number) => {
//   return { x, y };
// };
// interface Elementos {
//   a: HTMLAnchorElement;
//   video: HTMLVideoElement;
//   div: HTMLElement;
//   body: HTMLBodyElement;
//   audio: HTMLAudioElement;
// }
// function selecionar<K extends keyof Elementos>(
//   seletor: K
// ): Elementos[K] | null {
//   return document.querySelector(seletor);
// }
// selecionar("a");
// selecionar("video");
async function fetchData(url) {
    const base = "https://api.origamid.dev/json";
    const response = await fetch(base + url);
    return await response.json();
}
function checkInterface(obj, key) {
    if (obj && typeof obj === "object" && key in obj) {
        return true;
    }
    return false;
}
async function handleData() {
    const jogo = await fetchData("/jogo.json");
    if (checkInterface(jogo, "desenvolvedora"))
        console.log(jogo.desenvolvedora);
    const livro = await fetchData("/livro.json");
    if (checkInterface(livro, "autor"))
        console.log(livro.autor);
}
handleData();
