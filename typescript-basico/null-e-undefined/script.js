"use strict";
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
}
else {
    console.log("Total não foi definido");
}
const jogo = {
    nome: "Ragnarok",
};
const livro = {};
jogo.nome?.toLowerCase();
livro.nome?.toLowerCase();
if (jogo.nome) {
    jogo.nome.toLowerCase();
}
