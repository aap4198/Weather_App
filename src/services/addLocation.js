import { v4 as uuidv4 } from "uuid";
import locationModel from "../model/locationModel.js";
import { createSuccessResponse } from "../utils/createResponse.js";

function convertAddLocationPayload(payload) {
  return {
    location_id: uuidv4(),
    latitude: payload.latitude,
    longitude: payload.longitude,
  };
}

const addLocation = {
  handle: async function (payload) {
    const dto = convertAddLocationPayload(payload);
    const row = await locationModel.addLocation(dto);
    if (row) {
      console.log(`Location inserted successfully with id ${row?.location_id}`);
      return createSuccessResponse(
        `Location inserted successfully with id ${row?.location_id}`
      );
    } else {
      return null;
    }
  },
};

export default addLocation;
