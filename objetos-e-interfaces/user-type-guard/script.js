"use strict";
// async function fetchCursos() {
//   const response = await fetch("https://api.origamid.dev/json/cursos.json");
//   const json = await response.json();
//   handleCursos(json);
// }
// fetchCursos();
// function handleCursos(data: unknown) {
//   if (data instanceof Array) {
//     console.log("É uma instância de Array!");
//   }
//   if (Array.isArray(data)) {
//     console.log("É Array!");
//   }
// }
// function isString(value: unknown): value is string {
//   return typeof value === "string";
// }
// function handleData(data: unknown) {
//   if (isString(data)) {
//     console.log(data.toLowerCase());
//   }
// }
// handleData("Origamid");
async function fetchProduto() {
    const response = await fetch("https://api.origamid.dev/json/notebook.json");
    const json = await response.json();
    handleProduto(json);
}
fetchProduto();
function isProduto(value) {
    if (value &&
        typeof value === "object" &&
        "nome" in value &&
        "preco" in value) {
        return true;
    }
    return false;
}
function handleProduto(data) {
    if (isProduto(data)) {
        if (typeof data.nome === "string") {
            console.log(data.nome);
        }
        if (typeof data.preco === "number") {
            console.log(data.preco);
        }
    }
}
