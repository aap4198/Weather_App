import { baseServiceErrorCode } from "../constants/errorCode.js";

export default class PayloadValidationError extends Error {
  constructor(error) {
    super(error.message);
    this.errorMessage = error.message;
    this.errorCode = error.code || baseServiceErrorCode + 103;
  }
}
