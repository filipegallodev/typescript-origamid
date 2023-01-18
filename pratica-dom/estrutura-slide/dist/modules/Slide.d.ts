export default class Slide {
    container: Element;
    elements: Element[];
    controls: Element;
    time: number;
    constructor(container: Element, elements: Element[], controls: Element, time?: number);
}
