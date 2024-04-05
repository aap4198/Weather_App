import knex from "knex";
import DatabaseError from "../../error/DatabaseError.js";

class Database {
  async initiateConnection(connDetails) {
    try {
      this.db = await knex({
        client: "pg",
        connection: connDetails,
      });
    } catch (err) {
      console.log(`PG connection error ${err}`);
      throw new DatabaseError(err);
    }
  }

  async insert(tableName, insertObj) {
    try {
      const data = await this.db(tableName).insert(insertObj).returning("*");
      if (data) {
        return data;
      } else {
        return null;
      }
    } catch (err) {
      console.log(`PG insert error ${err}`);
      throw new DatabaseError(err);
    }
  }

  async select(tableName, filterObj, whereObj) {
    try {
      const rows = await this.db(tableName)
        .select(filterObj || "*")
        .where(whereObj || {});
      if (rows) {
        return rows;
      } else {
        return null;
      }
    } catch (err) {
      console.log(`PG select error ${err}`);
      throw new DatabaseError(err);
    }
  }

  async update(tableName, whereObj, updateObj) {
    try {
      const updateStatus = await this.db(tableName)
        .where(whereObj || {})
        .update(updateObj)
        .returning("*");
      if (updateStatus) {
        return updateStatus;
      } else {
        return null;
      }
    } catch (err) {
      console.log(`PG update error ${err}`);
      throw new DatabaseError(err);
    }
  }

  async delete(tableName, whereObj, updateObj) {
    try {
      const deleteStatus = await this.db(tableName)
        .where(whereObj || {})
        .delete(updateObj);
      if (deleteStatus) {
        return deleteStatus;
      } else {
        return null;
      }
    } catch (err) {
      console.log(`PG delete error ${err}`);
      throw new DatabaseError(err);
    }
  }

  closeConnection() {
    try {
      this.db.destroy();
    } catch (err) {
      console.log(`PG connection close error ${err}`);
      throw new DatabaseError(err);
    }
  }
}

export default new Database();
