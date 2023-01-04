"use strict";
const frase = "Front-End";
const preco = 500;
const condicao = preco > 100;
// type guard
if (typeof frase === "string")
    console.log("frase é string");
if (typeof preco === "number")
    console.log("frase é number");
if (typeof condicao === "boolean")
    console.log("frase é boolean");
const frase1 = new String("Front End");
const frase2 = String("Front-End");
const frase3 = "Front End";
console.log(typeof frase1);
console.log(typeof frase2);
console.log(typeof frase3);
