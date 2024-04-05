import { requestStatus } from "../constants/serviceCode.js";

function createSuccessResponse(resObj) {
  return {
    status: requestStatus.SUCCESS,
    data: resObj,
  };
}

function createErrorResponse(resObj) {
  return {
    status: requestStatus.FAILED,
    data: resObj,
  };
}

export { createErrorResponse, createSuccessResponse };
