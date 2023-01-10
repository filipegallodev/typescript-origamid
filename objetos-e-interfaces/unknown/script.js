"use strict";
function typeGuard(value) {
    if (typeof value === "string")
        return value.toLowerCase();
    if (typeof value === "number")
        return value.toFixed();
    if (value instanceof HTMLElement)
        return value.innerText;
}
console.log(typeGuard(250));
console.log(typeGuard("Testando Type Guard e Unknown"));
console.log(typeGuard(document.body));
