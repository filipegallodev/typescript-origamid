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

// async function fetchProduto() {
//   const response = await fetch("https://api.origamid.dev/json/notebook.json");
//   const json = await response.json();
//   handleProduto(json);
// }
// fetchProduto();

// interface Produto {
//   nome: string;
//   preco: number;
// }

// function isProduto(value: unknown): value is Produto {
//   if (
//     value &&
//     typeof value === "object" &&
//     "nome" in value &&
//     "preco" in value
//   ) {
//     return true;
//   }

//   return false;
// }

// function handleProduto(data: unknown) {
//   if (isProduto(data)) {
//     if (typeof data.nome === "string") {
//       console.log(data.nome);
//     }

//     if (typeof data.preco === "number") {
//       console.log(data.preco);
//     }
//   }
// }

// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.

async function fetchCursos() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const json = await response.json();
  handleCursos(json);
}
fetchCursos();

interface Curso {
  nome: string;
  horas: number;
  tags: string[];
}

function isCurso(value: unknown): value is Curso {
  if (
    value &&
    typeof value === "object" &&
    "nome" in value &&
    "horas" in value &&
    "tags" in value
  ) {
    return true;
  }

  return false;
}

function handleCursos(data: unknown) {
  if (data instanceof Array) {
    data.forEach((item) => {
      if (!isCurso(item)) return;

      mostraCurso(item);
    });
  }
}

function mostraCurso(curso: Curso) {
  document.body.innerHTML += `
    <div>
    <h2>${curso.nome}</h2>
    <p>Horas: ${curso.horas}</p>
    <p>Tags: ${curso.tags.join(", ")}</p>
    </div>
    `;
}
