// function somar(a: number, b: number, c?: number): number {
//   return a + b + (c ? c : 0);
// }

// console.log(somar(3, 4, 6));

// const subtrair = (a: number, b: number) => a - b;

// console.log(subtrair(5, 2));

// type Callback = (event: MouseEvent) => void;

// function pintarTela(cor: string): void {
//   document.body.style.background = cor;
// }

// console.log(pintarTela("black"));

// const btn = document.querySelector("button");

// btn?.click();

// function isString(value: any) {
//   if (typeof value === "string") {
//     return true;
//   }
// }

// console.log(isString("Teste"));
// console.log(isString(200));

// function abortar(mensagem: string): never {
//   throw new Error(mensagem);
// }

// abortar("Um erro ocorreu");
// console.log("Tente novamente");

// interface Quadrado {
//   lado: number;
//   perimetro(lado: number): number;
// }

// function calcular(forma: Quadrado) {
//   forma.perimetro(3);
// }

// function normalizar(valor: string): string;
// function normalizar(valor: string[]): string[];
// function normalizar(valor: string | string[]): string | string[] {
//   if (typeof valor === "string") return valor.trim().toLowerCase();

//   return valor.map((item) => item.trim().toLowerCase());
// }

// console.log(normalizar(" Produto "));
// console.log(normalizar([" Banana", " UVA   "]));

// function $(seletor: "a"): HTMLAnchorElement | null;
// function $(seletor: "video"): HTMLVideoElement | null;
// function $(seletor: string): Element | null;
// function $(seletor: string): Element | null {
//   return document.querySelector(seletor);
// }

// $("a");
// $("video");
// $(".item");

// Crie uma função que arredonda um valor passado para cima.
// A função pode receber string ou number.
// A função deve retornar o mesmo tipo que ela receber.

function arredondar(value: number): number;
function arredondar(value: string): string;
function arredondar(value: string | number): string | number {
  if (typeof value === "number") return Math.ceil(value);

  return String(Math.ceil(Number(value)));
}

console.log(arredondar("214.30"));
console.log(arredondar(198.12));
