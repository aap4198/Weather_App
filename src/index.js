import "dotenv/config";
import app from "./app.js";
import config from "./config/app/appConfig.js";
import database from "./config/db/database.js";
import redisConnection from "./config/redis/RedisConnection.js";

function startServer() {
  app.listen(config.APP_PORT, function () {
    console.log(`Weather app listening on port ${config.APP_PORT}`);
  });
  redisConnection.initiateConnection(config.REDIS_CONN_DET).then((err) => {
    if (err) {
      console.log(`Error while connecting redis ${err}`);
    } else {
      console.log(`Redis connection successful`);
    }
  });
  database.initiateConnection(config.PG_CONN_DET).then((err) => {
    if (err) {
      console.log(`Error while connecting PG ${err}`);
    } else {
      console.log(`PG connection successful`);
    }
  });
}

function stopServer() {
  redisConnection.closeConnection();
  database.closeConnection();
}

try {
  startServer();
  process.on("SIGINT", () => {
    console.log("Weather app shutting down...");
    stopServer();
    process.exit(0);
  });
} catch (err) {
  console.log(`Error while listening ${err}`);
}
