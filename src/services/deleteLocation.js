import locationModel from "../model/locationModel.js";
import { createSuccessResponse } from "../utils/createResponse.js";

const deleteLocation = {
  handle: async function (locationId) {
    const status = await locationModel.deleteLocation(locationId);
    if (status) {
      console.log(`Location deleted successfully with id ${locationId}`);
      return createSuccessResponse(
        `Location deleted successfully with id ${locationId}`
      );
    } else {
      return null;
    }
  },
};

export default deleteLocation;
