"use strict";
// let total: string | number = 200;
// total = "500";
// function isNumber(value: string | number) {
//   if (typeof value === "number") {
//     return true;
//   }
//   return false;
// }
// console.log(isNumber(20));
// console.log(isNumber("20"));
// const button = document.querySelector("button");
// button?.click();
// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")
function toNumber(value) {
    if (typeof value === "number") {
        return value;
    }
    if (typeof value === "string") {
        return Number(value);
    }
    throw "value deve ser um number | string";
}
console.log(toNumber(20));
console.log(toNumber("50"));
// console.log(toNumber([1, 2, 3]));
