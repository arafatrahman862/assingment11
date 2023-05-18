import { MongoClient } from "mongodb";
import { MONGO_DATABASE_NAME, MONGO_URI } from "./config.js";

export const client = new MongoClient(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// await client.connect()

export const db = client.db(MONGO_DATABASE_NAME);
export const USER = db.collection("user");
