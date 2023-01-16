// interface Produto {
//   nome: string;
//   quantidade: number;
// }

// const produto1 = {
//   nome: "Notebook",
//   quantidade: 10,
//   cor: "Azul",
// };

// const produto2 = {
//   nome: "Geladeira",
//   quantidade: 20,
//   freezer: true,
// };

// const servico1 = {
//   nome: "Instalação",
// };

// function mostrarQuantidade(produto: Produto) {
//   console.log(produto.quantidade + 20);
// }

// mostrarQuantidade(produto1);
// mostrarQuantidade(produto2);
// // mostrarQuantidade(servico1);

// function mostrarQuantidadePartial(produto: Partial<Produto>) {
//   if (produto.quantidade) console.log(produto.quantidade + 20);
// }

// mostrarQuantidadePartial(produto1);
// mostrarQuantidadePartial(produto2);
// mostrarQuantidadePartial(servico1);

// interface Post {
//   titulo: string;
//   visualizacoes: number;
//   tags: string[];
//   [key: string]: unknown;
// }

// const artigo: Post = {
//   titulo: "Como aprender HTML",
//   visualizacoes: 3000,
//   tags: ["HTML", "Front-End"],
//   autor: "André",
// };

// if (typeof artigo.autor === "string") console.log(artigo.autor.toLowerCase());

interface ObjetoLiteral {
  [key: string]: unknown;
}

type ObjetoLiteral2 = Record<string, unknown>;
// type ObjetoLiteral2 = Record<"titulo" | "autor", unknown>;

function mostrarTitulo(obj: ObjetoLiteral2) {
  if (obj && typeof obj === "object" && "titulo" in obj)
    console.log(obj.titulo);
}

// mostrarTitulo("string");
// mostrarTitulo(200);
mostrarTitulo({ titulo: "HTML e CSS" });
