import { httpCodes } from "../constants/serviceCode.js";

export default function (cbFunction) {
  return (req, res, next) => {
    cbFunction(req, res, next)
      .then((response) => {
        res.status(httpCodes.SUCCESS).send(response);
      })
      .catch((err) => {
        next(err);
      });
  };
}
