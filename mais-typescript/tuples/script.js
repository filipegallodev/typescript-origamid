"use strict";
// const produto1 = ["Notebook", 2500];
// const produto2: [string, number] = ["Notebook", 2500];
// if (typeof produto1[0] === "string") {
//   console.log(produto1[0].toLowerCase());
// }
// console.log(produto2[0].toLowerCase());
// console.log(produto2[1].toFixed());
// const [nome, preco] = produto2;
// function getText(selector: string) {
//   const el = document.querySelector<HTMLElement>(selector);
//   if (el) {
//     return [el, el.innerText] as const;
//   }
//   return null;
// }
// const button = getText("button");
// console.log(button);
// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - Some o total das vendas e mostre na tela
async function fetchVendas() {
    const response = await fetch("https://api.origamid.dev/json/vendas.json");
    const data = await response.json();
    somarTotal(data);
}
fetchVendas();
function somarTotal(vendas) {
    const total = vendas.reduce((total, venda) => total + venda[1], 0);
    mostrarTotal(total);
}
function mostrarTotal(total) {
    document.body.innerHTML += `
    <p>Total: R$ ${total}</p>
  `;
}
