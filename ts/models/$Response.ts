import { isCodeValid } from "./HTTPHelper.js";

export class $Response {
  private message: string;
  private code: string;
  private data: Object;

  constructor(code: string, $message: string, data?: Object) {
    data ? (this.data = data) : (this.data = {});
    this.setCode(code);
    this.message = $message;
  }


  private setCode(code: string): void {
    try {
      isCodeValid(code);
      this.code = code;
    } catch (error) {
      console.error(error);
    }
  }
  /**
   * Getter $message
   * @return {string}
   */
  public get $message(): string {
    return this.message;
  }

  /**
   * Getter $code
   * @return {string}
   */
  public get $code(): string {
    return this.code;
  }

  /**
   * Getter $data
   * @return {Object}
   */
  public get $data(): Object {
    return this.data;
  }

  public getDataItem(item: string): Object {
    return this.data[item];
  }
}
