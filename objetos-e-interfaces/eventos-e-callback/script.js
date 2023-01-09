"use strict";
// const button = document.querySelector("button");
// function handleClick(event: PointerEvent) {
//   console.log(event);
// }
// button?.addEventListener("pointerdown", handleClick);
// function handleScroll(event: Event) {
//   console.log(event);
// }
// window.addEventListener("scroll", handleScroll);
// function ativarMenu(event: Event) {
//   if (event instanceof MouseEvent) console.log(event.pageX);
//   if (event instanceof TouchEvent) console.log(event.touches[0].pageX);
// }
// document.documentElement.addEventListener("mousedown", ativarMenu);
// document.documentElement.addEventListener("touchstart", ativarMenu);
// window.addEventListener("keydown", ativarMenu);
// const button = document.querySelector("button");
// function handleClick(this: HTMLButtonElement, event: MouseEvent) {
//   console.log(this);
// }
// button?.addEventListener("click", handleClick);
// const button = document.querySelector("button");
// function handleClick(event: MouseEvent) {
//   if (event.currentTarget instanceof HTMLElement)
//     console.log(event.currentTarget.innerText);
// }
// button?.addEventListener("click", handleClick);
// Estado dos elementos
// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button
// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button
const mobileButton = document.querySelector("#btn-mobile");
const nav = document.querySelector("#nav");
function handleTouch(event) {
    nav?.classList.toggle("active");
    const button = event.target;
    if (button instanceof HTMLButtonElement && nav) {
        if (nav.classList.contains("active")) {
            button.ariaExpanded = "true";
            button.ariaLabel = "Fechar Menu";
        }
        else {
            button.ariaExpanded = "false";
            button.ariaLabel = "Abrir Menu";
        }
    }
}
if (mobileButton instanceof HTMLButtonElement) {
    mobileButton?.addEventListener("pointerdown", handleTouch);
}
