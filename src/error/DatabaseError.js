import { baseServiceErrorCode } from "../constants/errorCode.js";

export default class DatabaseError extends Error {
  constructor(error) {
    super(error.message);
    this.errorMessage = error.message;
    this.errorCode = error.code || baseServiceErrorCode + 104;
  }
}
