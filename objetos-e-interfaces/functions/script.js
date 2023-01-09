"use strict";
function somar(a, b, c) {
    return a + b + (c ? c : 0);
}
console.log(somar(3, 4, 6));
const subtrair = (a, b) => a - b;
console.log(subtrair(5, 2));
function pintarTela(cor) {
    document.body.style.background = cor;
}
console.log(pintarTela("black"));
const btn = document.querySelector("button");
btn?.click();
function isString(value) {
    if (typeof value === "string") {
        return true;
    }
}
console.log(isString("Teste"));
console.log(isString(200));
