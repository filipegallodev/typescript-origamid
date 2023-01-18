import Timeout from "./Timeout.js";
export default class Slide {
    container: Element;
    slides: Element[];
    controls: Element;
    time: number;
    index: number;
    slide: Element;
    timeout: Timeout | null;
    constructor(container: Element, slides: Element[], controls: Element, time?: number);
    hide(el: Element): void;
    show(index: number): void;
    auto(time: number): void;
    prev(): void;
    next(): void;
    private addControls;
    private init;
}
