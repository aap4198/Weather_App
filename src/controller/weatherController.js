import ServiceError from "../error/ServiceError.js";
import services from "../services/index.js";

const weatherController = {
  getAllLocation: async function () {
    console.log(`Request received for [getAllLocation]`);
    const response = await services.getAllLocation.handle();
    if (response) {
      return response;
    } else {
      throw new ServiceError("Operation get all location unsuccessful");
    }
  },
  addNewLocation: async function (req) {
    console.log(`Request received for [getAllLocation]`);
    const payload = req.body;
    const response = await services.addLocation.handle(payload);
    if (response) {
      return response;
    } else {
      throw new ServiceError({
        message: "Operation add new location unsuccessful",
      });
    }
  },
  getLocationBasedOnId: async function (req) {
    console.log(`Request received for [getLocationBasedOnId]`);
    const locationId = req.params.locationId;
    const response = await services.getLocationBasedOnId.handle(locationId);
    if (response) {
      return response;
    } else {
      throw new ServiceError({
        message: `Operation get location for id ${locationId} unsuccessful`,
      });
    }
  },
  updateLocation: async function (req) {
    console.log(`Request received for [updateLocation]`);
    const locationId = req.params.locationId;
    const payload = req.body;
    const response = await services.updateLocation.handle({
      locationId,
      ...payload,
    });
    if (response) {
      return response;
    } else {
      throw new ServiceError({
        message: "Operation update location unsuccessful",
      });
    }
  },
  deleteLocation: async function (req) {
    console.log(`Request received for [deleteLocation]`);
    const locationId = req.params.locationId;
    const response = await services.deleteLocation.handle(locationId);
    if (response) {
      return response;
    } else {
      throw new ServiceError({
        message: "Operation delete location unsuccessful",
      });
    }
  },
  getHistory: async function () {
    console.log(`Request received for [getHistory]`);
    const response = await services.getHistory.handle();
    if (response) {
      return response;
    } else {
      throw new ServiceError({ message: "Operation get history unsuccessful" });
    }
  },
  getWeatherBasedOnLocation: async function (req) {
    console.log(`Request received for [getWeatherBasedOnLocation]`);
    const locationId = req.params.locationId;
    const response = await services.getWeatherBasedOnLocation.handle(
      locationId
    );
    if (response) {
      return response;
    } else {
      throw new ServiceError({
        message: "Operation get weather for location unsuccessful",
      });
    }
  },
};

export default weatherController;
