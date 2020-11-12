export enum HTTPHelper {
  INFO = "info",
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "errror",
  GET = "GET",
  HEAD = "HEAD",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  CONNECT = "CONNECT",
  OPTIONS = "OPTIONS",
  TRACE = "TRACE",
  PATCH = "PATCH",
}

/**
 * isMethodValid
 * @param {string} method
 * @returns {boolean}
 */
export function isMethodValid(method: string): boolean {
  let isValid: boolean;

  switch (method) {
    case HTTPHelper.GET:
      isValid = true;
      break;
    case HTTPHelper.HEAD:
      isValid = true;
      break;
    case HTTPHelper.POST:
      isValid = true;
      break;
    case HTTPHelper.PUT:
      isValid = true;
      break;
    case HTTPHelper.DELETE:
      isValid = true;
      break;
    case HTTPHelper.CONNECT:
      isValid = true;
      break;
    case HTTPHelper.OPTIONS:
      isValid = true;
      break;
    case HTTPHelper.TRACE:
      isValid = true;
      break;
    case HTTPHelper.PATCH:
      isValid = true;
      break;
    default:
      isValid = false;
      break;
  }

  if (isValid) {
    return isValid;
  } else {
    throw new Error(`El método HTTP ${method} no es correcto.`);
  }
}

/**
 * isCodeValid
 * @param {string} code
 * @returns {boolean}
 */
export function isCodeValid(code: string): boolean {
  let isValid: boolean;

  switch (code) {
    case HTTPHelper.ERROR:
      isValid = true;
      break;
    case HTTPHelper.INFO:
      isValid = true;
      break;
    case HTTPHelper.SUCCESS:
      isValid = true;
      break;
    case HTTPHelper.WARNING:
      isValid = true;
      break;
    default:
      isValid = false;
      break;
  }

  if (isValid) {
    return isValid;
  } else {
    throw new Error(`El codigo de respuesta HTTP ${code} no es correcto.`);
  }
}


export default HTTPHelper;
