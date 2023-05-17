import express from "express";
import {} from "../src/database.js";

const router = express.Router();

router.post("/login", (req, res) => {
  let { email, password } = req.body;
  res.json("respond with a resource");
});

export default router;
