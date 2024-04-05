import express from "express";
import payloadValidationMiddleware from "../middleware/payloadValidationMiddleware.js";
import weatherController from "../controller/weatherController.js";
import addLocationSchema from "../schema/addLocationSchema.js";
import errorControllerMiddleware from "../middleware/errorControllerMiddleware.js";
import updateLocationSchema from "../schema/updateLocationSchema.js";

const router = express.Router();

router.get(
  "/locations",
  errorControllerMiddleware(weatherController.getAllLocation)
);

router.post(
  "/locations",
  payloadValidationMiddleware(addLocationSchema),
  errorControllerMiddleware(weatherController.addNewLocation)
);

router.get(
  "/locations/:locationId",
  errorControllerMiddleware(weatherController.getLocationBasedOnId)
);

router.put(
  "/locations/:locationId",
  payloadValidationMiddleware(updateLocationSchema),
  errorControllerMiddleware(weatherController.updateLocation)
);

router.delete(
  "/locations/:locationId",
  errorControllerMiddleware(weatherController.deleteLocation)
);

router.get(
  "/weather/:locationId",
  errorControllerMiddleware(weatherController.getWeatherBasedOnLocation)
);

router.get("/history", errorControllerMiddleware(weatherController.getHistory));

export default router;
