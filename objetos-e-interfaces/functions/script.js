"use strict";
// function somar(a: number, b: number, c?: number): number {
//   return a + b + (c ? c : 0);
// }
function arredondar(value) {
    if (typeof value === "number")
        return Math.ceil(value);
    return String(Math.ceil(Number(value)));
}
console.log(arredondar("214.30"));
console.log(arredondar(198.12));
