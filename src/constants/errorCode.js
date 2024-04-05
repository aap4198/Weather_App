const baseServiceErrorCode = 9000;

const errorMessage = {
  [baseServiceErrorCode + 101]: "Internal server error",
  [baseServiceErrorCode + 102]: "Feature unavailable error",
  [baseServiceErrorCode + 103]: "Payload validation error",
};

export { baseServiceErrorCode, errorMessage };
