"use strict";
// const numeros = [10, 20, 30, 40, 50, 3];
// const valores = [10, "Taxas", 30, "Produto", 50, 3];
async function fetchCursos() {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const data = await response.json();
    mostrarCursos(data);
}
fetchCursos();
function mostrarCursos(data) {
    data.forEach((curso) => {
        document.body.innerHTML += `
    <div>
      <h2 style="color: ${curso.nivel === "iniciante" ? "#00f" : "#f00"}">${curso.nome}</h2>
      <p>Horas: ${curso.horas}</p>
      <p>Aulas: ${curso.aulas}</p>
      <p>Tipo: ${curso.gratuito ? "Gratuito" : "Pago"}</p>
      <p>Tags: ${curso.tags.join(", ")}</p>
      <p>Aulas: ${curso.idAulas.join(" | ")}</p>
    </div>
    `;
    });
}
