import { env } from "node:process";
import path from "node:path";
import dotenv from "dotenv";

dotenv.config();

export const PORT = env.PORT || 8080;
export const MONGO_URI = env.MONGO_URI || "mongodb://localhost:27017";
export const MONGO_DATABASE_NAME = env.MONGO_DATABASE_NAME || "main";
export const ASSET_FOLDER = path.resolve("public");
