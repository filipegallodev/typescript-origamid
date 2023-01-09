function somar(a: number, b: number, c?: number): number {
  return a + b + (c ? c : 0);
}

console.log(somar(3, 4, 6));

const subtrair = (a: number, b: number) => a - b;

console.log(subtrair(5, 2));

type Callback = (event: MouseEvent) => void;

function pintarTela(cor: string): void {
  document.body.style.background = cor;
}

console.log(pintarTela("black"));

const btn = document.querySelector("button");

btn?.click();

function isString(value: any) {
  if (typeof value === "string") {
    return true;
  }
}

console.log(isString("Teste"));
console.log(isString(200));
