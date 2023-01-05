function normalizar(texto: string) {
  return texto.trim().toLowerCase();
}

console.log(normalizar(" DeSign "));
// console.log(normalizar(200));

async function fetchJSON(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  manipularData(data);
}

fetchJSON("https://api.origamid.dev/json/cursos.json");

function manipularData(data: { nome: string }) {
  console.log(data.nome);
}

interface Curso {
  nome: string;
  horas: number;
}

function mostrarCursos(cursos: Curso[]) {
  cursos.forEach((curso) => {
    document.body.innerHTML += `
      <div>
        <h2>${curso.nome}</h2>
        <p>Horas: ${curso.horas}</p>
      </div>
    `;
  });
}

const dados: any = "o any gera problemas";

mostrarCursos(dados);
