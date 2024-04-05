import database from "../config/db/database.js";

const TABLE_NAME = "location";

const locationModel = {
  addLocation: async function (dto) {
    const row = await database.insert(TABLE_NAME, dto);
    if (row?.[0]) {
      return row[0];
    } else {
      return null;
    }
  },
  deleteLocation: async function (locationId) {
    const row = await database.delete(TABLE_NAME, { location_id: locationId });
    if (row) {
      return true;
    } else {
      return null;
    }
  },
  updateLocation: async function (payload) {
    const row = await database.update(
      TABLE_NAME,
      {
        location_id: payload.locationId,
      },
      {
        latitude: payload.latitude,
        longitude: payload.longitude,
      }
    );
    if (row[0]) {
      return row[0];
    } else {
      return null;
    }
  },
  getAllLocation: async function () {
    const row = await database.select(TABLE_NAME);
    if (row.length > 0) {
      return row;
    } else {
      return null;
    }
  },
  getLocationById: async function (locationId) {
    const row = await database.select(TABLE_NAME, null, {
      location_id: locationId,
    });
    if (row.length > 0) {
      return row[0];
    } else {
      return null;
    }
  },
};

export default locationModel;
