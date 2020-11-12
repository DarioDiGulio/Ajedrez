import structure from "./structure.js";
import { $Response } from "./$Response.js";
import HTTPHelper from "./HTTPHelper.js";
import $Storage from "../utils/Interface/Storage.js";
import { FORM_ERROR } from '../utils/Custom/Messajes.js';
import { $Request } from "./$Request.js";

class Api {
  private API_URL = 'http://localhost:8080';

  async getPeopleSwapi(): Promise<$Response>{
      const endopoint: string = structure['example'].swapi.people;
      const request: $Request = new $Request(endopoint, 'GET');
      const response: $Response = await this.fetchGet(request);
      return response;
  }

  /**
   * Setter $headers
   */
  private setHeaders(session: boolean): Headers {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    session &&
      headers.append(
        "Authorization",
        `Bearer ${$Storage.getStorageItem("token")}`
      );
    return headers;
  }

  private setRequestOptions(session: boolean, method: string, data?: Object): Object {
    const requestOptions = {
      method: method,
      headers: this.setHeaders(session),
      body: data ? JSON.stringify(data) : {},
      redirect: "follow",
    };
    return requestOptions;
  }

  private setGetOptions(session?: boolean): Object {
    const requestOptions = {
        method: 'GET',
        headers: this.setHeaders(session || false),
        redirect: "follow",
      };
      return requestOptions;
  }


  private async fetchGet(request: $Request, session?: boolean): Promise<$Response> {
    const requestOptions = this.setGetOptions(session);
    let result: Response = await fetch(`${this.API_URL}${request.$endpoint}`, requestOptions);
    let response: $Response;

    if (result) {
      result = await result.json();
      const data = result['data'] || {};
      const message = result['message'] || '';
      const code = result['code'] || '';
      response = new $Response(code, message, data);
    }
    return response || new $Response(HTTPHelper.ERROR, FORM_ERROR);
  }

  private async fetch(request: $Request, session?: boolean): Promise<$Response> {
    const requestOptions = this.setRequestOptions(session, request.$method, request.$data);
    let result: Response = await fetch(`${this.API_URL}${request.$endpoint}`, requestOptions);
    let response: $Response;

    if (result) {
      result = await result.json();
      const data = result['data'] || {};
      const message = result['message'] || '';
      const code = result['code'] || '';
      response = new $Response(code, message, data);
    }
    return response || new $Response(HTTPHelper.ERROR, FORM_ERROR);
  }
}

export default Api;