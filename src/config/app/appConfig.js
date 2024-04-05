const config = {
  APP_PORT: process.env.APP_PORT,
  REDIS_CONN_DET: {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT),
  },
  PG_CONN_DET: {
    host: process.env.DB_HOST_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
  OPEN_WEATHER_API_KEY: process.env.OPEN_WEATHER_API_KEY,
};

export default config;
