class DomElement {
  private domElement: HTMLElement;

  constructor(element: string | HTMLElement) {
    if (element instanceof HTMLElement) {
      this.domElement = element;
    } else {
      this.domElement = document.getElementById(element);
    }
  }

  /**
   * setInnerText
   * @param text: String to set in innerText's element
   */
  public setInnerText(text: string): void {
    this.domElement.innerText = text;
  }

  /**
   * addInnerText
   * * @param text: String to add in innerText's element
   */
  public addInnerText(text: string): void {
    this.domElement.innerText += text;
  }

  /**
   * setinnerHTML
   * @param text: String to set in innerHTML's element
   */
  public setinnerHTML(text: string): void {
    this.domElement.innerHTML = text;
  }

  /**
   * addinnerHTML
   * * @param text: String to add in innerHTML's element
   */
  public addinnerHTML(text: string): void {
    this.domElement.innerHTML += text;
  }

  public show(): void {
    this.domElement.hidden = false;
  }

  public hidden(): void {
    this.domElement.hidden = true;
  }

  public getInnerText(): string {
    return this.domElement.innerText;
  }

  public getInnerHtml(): string {
    return this.domElement.innerHTML;
  }

  public addEvent(event: string, $function): void {
      this.domElement.addEventListener(event, $function);
  }
}

export default DomElement;