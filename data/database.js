const dotenv = require("dotenv");
dotenv.config(); // Load environment variables from .env file
const { MongoClient } = require("mongodb");

let database;

const initDb = (callback) => {
  if (database) {
    console.log("Db is already initialized!");
    return callback(null, database);
  }
  // Connect to MongoDB using the URI from the .env file
  MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
      database = client.db(); // Access the database (it will default to the database in the URI)
      callback(null, database);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDatabase = () => {
  if (!database) {
    throw Error("Db not initialized");
  }
  return database;
};

module.exports = {
  initDb,
  getDatabase
};
