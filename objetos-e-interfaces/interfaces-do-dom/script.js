"use strict";
// const video = document.querySelector("video");
// const video2 = document.querySelector("#videoprincipal");
// video?.volume;
// video2?.volume;
// if (video2 instanceof HTMLVideoElement) {
//   video2.volume;
// }
// const links = document.querySelectorAll(".link");
// console.log(links);
// links.forEach((link) => {
//   console.log(link);
//   if (link instanceof HTMLAnchorElement) {
//     console.log(link.href);
//   }
// });
// const dados = [1, 2, 3];
// const arrayLinks = Array.from(links);
// const anchorLinks = arrayLinks.filter(
//   (link) => link instanceof HTMLAnchorElement
// );
// console.log(anchorLinks);
const links = document.querySelectorAll(".link");
function modificaCorEBorda(link) {
    link.style.color = "#333";
    link.style.padding = "4px";
    link.style.border = "2px solid #fb1";
    link.style.borderRadius = "4px";
}
links.forEach((link) => {
    if (link instanceof HTMLElement) {
        modificaCorEBorda(link);
    }
});
