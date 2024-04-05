import { httpCodes } from "../constants/serviceCode.js";
import { createErrorResponse } from "../utils/createResponse.js";

const errorController = (error, req, res, next) => {
  const errorCode = error.code || httpCodes.FAILED;
  const errorObj = createErrorResponse(error.message);
  res.status(errorCode).send(errorObj);
};

export default errorController;
