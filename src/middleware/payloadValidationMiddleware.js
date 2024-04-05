import PayloadValidationError from "../error/PayloadValidationError.js";

function payloadValidationMiddleware(schema) {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      throw new PayloadValidationError(error);
    }
    next();
  };
}

export default payloadValidationMiddleware;
