import plugin from "./plugin.js";
const teste = "teste";
plugin();
function handleProduto(dados) {
    dados;
}
const link = document.querySelector("a");
if (link) {
    link.innerHTML = "Teste";
}
function handleClick() {
    console.log(this);
}
document.documentElement.addEventListener("click", handleClick);
function trocarModo(modo) {
    if (modo === "dark")
        return "color: black;";
    return "color: white";
}
trocarModo("light");
function maiuscula(frase) {
    console.log(frase);
    const total = 100;
}
//# sourceMappingURL=script.js.map