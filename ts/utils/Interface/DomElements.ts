import DomElement from "./DomElement.js";

class DomElements {
  private domElements: Array<DomElement> = [];

  constructor(selector: string) {
    const elements = Array.from(document.querySelectorAll(selector));
    for (const element of elements) {
      const elementParse: HTMLElement = element as HTMLElement;
      this.domElements.push(new DomElement(elementParse));
    }
  }

  public getFirstCount(count: number): Array<DomElement> {
    let newDomElements: Array<DomElement> = [];
    for (let i = 0; i < count; i++) {
      newDomElements.push(this.domElements.shift());
    }
    return newDomElements;
  }
}

export default DomElements;
