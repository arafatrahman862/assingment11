import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";
import { JWT_SECRET } from "./config";

export function sign(payload) {
  return jwt.sign(payload, JWT_SECRET);
}

export function auth(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    throw StatusCodes.UNAUTHORIZED;
  }
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Invalid token" });
    }
    req.user = user;
    next();
  });
}
