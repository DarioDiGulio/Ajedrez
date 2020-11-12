import { isMethodValid } from "./HTTPHelper.js";

export class $Request {
  private endpoint: string;
  private method: string;
  private data: Object;

  constructor(endpoint: string, method: string, data?: Object) {
    data ? (this.data = data) : (this.data = {});
    this.setMethod(method);
    this.endpoint = endpoint;
  }

  /**
   * Setter $method
   * @param {string} method
   */
  private setMethod(method: string) {
    try {
      isMethodValid(method);
      this.method = method;
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Getter $endpoint
   * @return {string}
   */
  public get $endpoint(): string {
    return this.endpoint;
  }

  /**
   * Getter $data
   * @return {Object}
   */
  public get $data(): Object {
    return this.data;
  }

  /**
   * Getter $method
   * @return {string}
   */
  public get $method(): string {
    return this.method;
  }
}
