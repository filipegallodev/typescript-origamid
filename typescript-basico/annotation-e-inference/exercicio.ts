function normalizarTexto(texto: string) {
  return texto.trim().toLowerCase();
}

console.log(normalizarTexto("DEsigN"));

const input = document.querySelector("input");
const total = localStorage.getItem("ganho-total");

function calcularGanho(value: number) {
  const p = document.querySelector("p");
  if (p) {
    p.innerText = `Ganho total: ${value + 100 - value * 0.2}`;
  }
}

function totalMudou() {
  if (input) {
    calcularGanho(Number(input.value));
    localStorage.setItem("ganho-total", input.value);
  }
}

if (input) {
  input.addEventListener("keyup", totalMudou);
  if (total) {
    input.value = total;
    totalMudou();
  }
}
