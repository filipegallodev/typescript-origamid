"use strict";
// function retorno<variavel>(a: variavel): variavel {
//   return a;
// }
// console.log(retorno<string>("A Game"));
// console.log(retorno<number>(200));
// console.log(retorno<boolean>(true));
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const frutas = ["Banana", "Pera", "Uva", "Laranja", "Limão", "Maçã"];
// function firstFive<T>(lista: T[]): T[] {
//   return lista.slice(0, 5);
// }
// console.log(firstFive(numeros));
// console.log(firstFive(frutas));
// function notNull<T>(arg: T) {
//   if (arg !== null) return arg;
//   return null;
// }
// console.log(notNull("André"));
// console.log(notNull(200));
function tipoDado(a) {
    const resultado = {
        dado: a,
        tipo: typeof a,
    };
    console.log(resultado);
    return resultado;
}
tipoDado("Teste");
tipoDado(true);
tipoDado(200);
