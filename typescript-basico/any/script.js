"use strict";
function normalizar(texto) {
    return texto.trim().toLowerCase();
}
console.log(normalizar(" DeSign "));
// console.log(normalizar(200));
async function fetchJSON(url) {
    const response = await fetch(url);
    const data = await response.json();
    manipularData(data);
}
fetchJSON("https://api.origamid.dev/json/cursos.json");
function manipularData(data) {
    console.log(data.nome);
}
function mostrarCursos(cursos) {
    cursos.forEach((curso) => {
        document.body.innerHTML += `
      <div>
        <h2>${curso.nome}</h2>
        <p>Horas: ${curso.horas}</p>
      </div>
    `;
    });
}
const dados = "o any gera problemas";
mostrarCursos(dados);
