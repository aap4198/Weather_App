import config from "../config/app/appConfig.js";
import RedisConnection from "../config/redis/RedisConnection.js";
import historyModel from "../model/historyModel.js";
import locationModel from "../model/locationModel.js";
import axiosCall from "../utils/axios.js";

async function getWeatherDetails(reqObj) {
  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${reqObj.latitude}&lon=${reqObj.longitude}&appid=${config.OPEN_WEATHER_API_KEY}`;
  const response = await axiosCall("get", url);
  if (response) {
    await historyModel.saveWeatherRecord(
      reqObj.location_id,
      JSON.stringify(response)
    );
    await RedisConnection.set(reqObj.location_id, JSON.stringify(response));
    return response;
  } else {
    return null;
  }
}

const getWeatherBasedOnLocation = {
  handle: async function (locationId) {
    const cache = await RedisConnection.get(locationId);
    if (cache) {
      return cache;
    }
    const locationDetails = await locationModel.getLocationById(locationId);
    const response = await getWeatherDetails(locationDetails);
    if (response) {
      return response;
    } else {
      return null;
    }
  },
};

export default getWeatherBasedOnLocation;
