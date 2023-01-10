"use strict";
async function fetchCursos() {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const json = await response.json();
    handleCursos(json);
}
fetchCursos();
function handleCursos(data) {
    if (data instanceof Array) {
        console.log("É uma instância de Array!");
    }
    if (Array.isArray(data)) {
        console.log("É Array!");
    }
}
function isString(value) {
    return typeof value === "string";
}
function handleData(data) {
    if (isString(data)) {
        console.log(data.toLowerCase());
    }
}
handleData("Origamid");
