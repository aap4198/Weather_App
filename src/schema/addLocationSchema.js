import Joi from "joi";

const addLocationSchema = Joi.object({
  latitude: Joi.number().required(),
  longitude: Joi.number().required(),
});

export default addLocationSchema;
