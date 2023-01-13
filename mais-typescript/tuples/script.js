"use strict";
// const produto1 = ["Notebook", 2500];
// const produto2: [string, number] = ["Notebook", 2500];
// if (typeof produto1[0] === "string") {
//   console.log(produto1[0].toLowerCase());
// }
// console.log(produto2[0].toLowerCase());
// console.log(produto2[1].toFixed());
// const [nome, preco] = produto2;
function getText(selector) {
    const el = document.querySelector(selector);
    if (el) {
        return [el, el.innerText];
    }
    return null;
}
const button = getText("button");
console.log(button);
