import locationModel from "../model/locationModel.js";

const getLocationBasedOnId = {
  handle: async function (locationId) {
    const res = await locationModel.getLocationById(locationId);
    if (res) {
      return res;
    } else {
      return null;
    }
  },
};

export default getLocationBasedOnId;
