import Joi from "joi";

const updateLocationSchema = Joi.object({
  latitude: Joi.number().required(),
  longitude: Joi.number().required(),
});

export default updateLocationSchema;
