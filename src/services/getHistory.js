import historyModel from "../model/historyModel.js";
import { createSuccessResponse } from "../utils/createResponse.js";

const getHistory = {
  handle: async function () {
    const res = await historyModel.getHistory();
    if (res) {
      return createSuccessResponse(res);
    } else {
      return null;
    }
  },
};

export default getHistory;
