// declare global {
//   interface Usuario {
//     nome: string;
//     id: number;
//   }
// }

export interface Produto {
  nome: string;
  preco: number;
}

const livro: Produto = {
  nome: "O Senhor dos Anéis",
  preco: 100,
};
