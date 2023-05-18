import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import express from "express";
import { USER } from "../src/database.js";
import { HttpError } from "../src/error.js";

const router = express.Router();

router.post("/register", async (req, res, next) => {
  try {
    const { name, email, password, imageURI } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    await USER.insertOne({
      _id: email,
      name,
      password: hashedPassword,
      imageURI,
    });
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await USER.findOne({ _id: email });
    const isValidPass = await bcrypt.compare(password, user.password);

    if (!user || !isValidPass) {
      throw new HttpError(401, 'invalid username or password');
    }
    // const token = jwt.sign({ email }, "secret_key");
    res.json({ token: 'sdsd' });
  } catch (err) {
    next(err);
  }
});

export default router;
