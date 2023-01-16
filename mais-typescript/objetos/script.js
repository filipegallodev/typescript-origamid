"use strict";
// interface Produto {
//   nome: string;
//   quantidade: number;
// }
// type ObjetoLiteral2 = Record<"titulo" | "autor", unknown>;
function mostrarTitulo(obj) {
    if (obj && typeof obj === "object" && "titulo" in obj)
        console.log(obj.titulo);
}
// mostrarTitulo("string");
// mostrarTitulo(200);
mostrarTitulo({ titulo: "HTML e CSS" });
