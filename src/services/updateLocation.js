import locationModel from "../model/locationModel.js";
import { createSuccessResponse } from "../utils/createResponse.js";

const updateLocation = {
  handle: async function (payload) {
    const updatedRow = await locationModel.updateLocation(payload);
    if (updatedRow) {
      console.log(
        `Location updated successfully with id ${payload.locationId}`
      );
      return createSuccessResponse({
        message: `Location updated successfully with id ${payload.locationId}`,
        ...updatedRow,
      });
    } else {
      return null;
    }
  },
};

export default updateLocation;
