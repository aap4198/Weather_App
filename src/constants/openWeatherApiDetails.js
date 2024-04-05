import config from "../config/app/appConfig";

const apiKey = config.OPEN_WEATHER_API_KEY;

const openWeatherApiDetails = {
  SUCCESS: 200,
  FAILED: 400,
};

export default openWeatherApiDetails;
