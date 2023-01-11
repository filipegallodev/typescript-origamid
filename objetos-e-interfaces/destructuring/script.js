"use strict";
// const { body }: { body: HTMLElement } = document;
// Caso o tipo não venha informado na desestruturação
// const { body } = document;
// interface Produto {
//   nome: string;
//   preco?: number;
// }
// function handleData({ nome, preco }: Produto) {
//   nome.includes("book");
//   preco?.toFixed();
// }
// handleData({
//   nome: "Notebook",
//   preco: 2000,
// });
// function handleClick1({
//   currentTarget,
//   pageX,
// }: {
//   currentTarget: EventTarget | null;
//   pageX: number;
// }) {
//   if (currentTarget instanceof HTMLElement) {
//     currentTarget.innerHTML = `<h1>Mouse click em X: ${pageX}</h1>`;
//   }
//   console.log(pageX);
// }
// function handleClick2({ currentTarget, pageX }: MouseEvent) {
//   if (currentTarget instanceof HTMLElement) {
//     currentTarget.innerHTML = `<h1>Mouse click em X: ${pageX}</h1>`;
//   }
//   console.log(pageX);
// }
// document.documentElement.addEventListener("click", handleClick2);
// function handleClick({ currentTarget }: { currentTarget: EventTarget | null }) {
//   if (currentTarget instanceof HTMLElement) {
//     currentTarget.innerHTML = `<h1>Mouse click em X: 1</h1>`;
//   }
// }
// document.documentElement.addEventListener("click", handleClick);
// document.documentElement.addEventListener("touchstart", handleClick);
function comparar(tipo, ...numeros) {
    if (tipo === "menor")
        return Math.min(...numeros);
    if (tipo === "maior")
        return Math.max(...numeros);
}
const menor = comparar("menor", 4, 15, 5, 7, 20, 10, 6, 30, 3, 1);
console.log(menor);
const maior = comparar("maior", 4, 15, 5, 7, 20, 10, 6, 30, 3, 1);
console.log(maior);
