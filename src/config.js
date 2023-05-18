import { env } from "node:process";
import path from "node:path";
import dotenv from "dotenv";

dotenv.config();

if (env.LOG_LEVEL.toUpperCase() != "DEBUG") {
  console.debug = () => {};
}

export const PORT = env.PORT || 8080;
export const JWT_SECRET = env.JWT_SECRET || "";
export const MONGO_URI = env.MONGO_URI || "mongodb://localhost:27017/test";
export const MONGO_DATABASE_NAME = env.MONGO_DATABASE_NAME || "test";
export const ASSET_FOLDER = path.resolve("public");