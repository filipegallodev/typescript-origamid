import Slide from "./modules/Slide.js";
const container = document.getElementById("slide");
const elements = document.getElementById("slide-elements");
const controls = document.getElementById("slide-controls");
if (container && elements && elements.children.length > 0 && controls) {
    const slide = new Slide(container, Array.from(elements.children), controls, 3000);
    slide.show(2);
    console.log(slide.slide);
}
//# sourceMappingURL=script.js.map