import database from "../config/db/database.js";

const TABLE_NAME = "tb_history";

const historyModel = {
  getHistory: async function () {
    const row = await database.select(TABLE_NAME);
    if (row.length > 0) {
      return row;
    } else {
      return null;
    }
  },
  saveWeatherRecord: async function (location_id, weather_details) {
    const row = await database.insert(TABLE_NAME, {
      location_id,
      weather_details,
    });
    if (row?.[0]) {
      return row[0];
    } else {
      return null;
    }
  },
};

export default historyModel;
