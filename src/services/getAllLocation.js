import locationModel from "../model/locationModel.js";

const getAllLocation = {
  handle: async function () {
    const res = await locationModel.getAllLocation();
    if (res) {
      return res;
    } else {
      return null;
    }
  },
};

export default getAllLocation;
