//@ts-check
const frase = "Front End";
const total = 100.05;
const empresas = ["Apple", "Microsoft"];

frase.toLowerCase();
// total.toLowerCase();

const t = total.toFixed();

console.log(t + 10);

empresas.map((empresa) => empresa.toLowerCase());

const body = document.body;

body.style.background = "#000";

const button = document.querySelector("button");

if (button) {
  button.click();
}

const operacao = 100 + 200;

console.log(operacao);
