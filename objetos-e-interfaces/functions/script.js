"use strict";
// function somar(a: number, b: number, c?: number): number {
//   return a + b + (c ? c : 0);
// }
function normalizar(valor) {
    if (typeof valor === "string")
        return valor.trim().toLowerCase();
    return valor.map((item) => item.trim().toLowerCase());
}
console.log(normalizar(" Produto "));
console.log(normalizar([" Banana", " UVA   "]));
function $(seletor) {
    return document.querySelector(seletor);
}
$("a");
$("video");
$(".item");
