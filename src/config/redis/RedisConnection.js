import redis from "redis";

class RedisConnection {
  async initiateConnection(connDetails) {
    try {
      this.client = redis.createClient(connDetails);
      await this.client.connect();

      this.client.on("end", () => {
        console.log("Disconnected from Redis server");
      });
    } catch (err) {
      console.log(`Redis connection error ${err}`);
    }
  }

  async get(key) {
    try {
      const data = await this.client.get(key);
      if (data) {
        return data;
      } else {
        return null;
      }
    } catch (err) {
      console.log(`Redis get error ${err}`);
    }
  }

  async set(key, value) {
    try {
      return await this.client.set(key, value);
    } catch (err) {
      console.log(`Redis set error ${err}`);
    }
  }

  closeConnection() {
    try {
      this.client.quit();
    } catch (err) {
      console.log(`Redis connection close error ${err}`);
    }
  }
}

export default new RedisConnection();
