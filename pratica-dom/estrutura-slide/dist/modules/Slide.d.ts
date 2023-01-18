export default class Slide {
    container: Element;
    slides: Element[];
    controls: Element;
    time: number;
    index: number;
    slide: Element;
    constructor(container: Element, slides: Element[], controls: Element, time?: number);
    hide(el: Element): void;
    show(index: number): void;
}
