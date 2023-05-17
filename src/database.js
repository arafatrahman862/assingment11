import { MongoClient } from "mongodb";
import { MONGO_DATABASE_NAME, MONGO_URI } from "./config.js";

const client = new MongoClient(MONGO_URI);
const db = client.db(MONGO_DATABASE_NAME);

export const collection = {
    user: db.collection("user")
}
