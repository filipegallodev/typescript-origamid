// const numeros = [10, 20, 30, 40, 50, 3];
// const valores = [10, "Taxas", 30, "Produto", 50, 3];

// function maiorQue10(data: Array<number>) {
//   return data.filter((n) => n > 10);
// }

// function filtrarValores(data: Array<number | string>) {
//   return data.filter((item) => typeof item === "number");
// }

// console.log(maiorQue10(numeros));
// console.log(filtrarValores(valores));

// const dados = [
//   ["O Senhor dos Anéis", 80],
//   ["A Guerra dos Tronos", 120],
// ];

interface Curso {
  nome: string;
  nivel: "iniciante" | "avancado";
  aulas: number;
  gratuito: boolean;
  horas: number;
  idAulas: Array<number>;
  tags: Array<string>;
}

async function fetchCursos() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const data = await response.json();
  mostrarCursos(data);
}

fetchCursos();

function mostrarCursos(data: Array<Curso>) {
  data.forEach((curso) => {
    document.body.innerHTML += `
    <div>
      <h2 style="color: ${curso.nivel === "iniciante" ? "#00f" : "#f00"}">${
      curso.nome
    }</h2>
      <p>Horas: ${curso.horas}</p>
      <p>Aulas: ${curso.aulas}</p>
      <p>Tipo: ${curso.gratuito ? "Gratuito" : "Pago"}</p>
      <p>Tags: ${curso.tags.join(", ")}</p>
      <p>Aulas: ${curso.idAulas.join(" | ")}</p>
    </div>
    `;
  });
}
