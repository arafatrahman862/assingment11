import path from "node:path";
import express from "express";
import cors from "cors";
import { ASSET_FOLDER, PORT } from "./src/config.js";

import indexRouter from "./routes/index.js";
import userRouter from "./routes/user.js";

const app = express();

app.listen(PORT, () => {
  // console.clear();
  console.log(`listening on port ${PORT}`)
});

app.use(cors());
app.use(express.json());
app.use(express.static(ASSET_FOLDER));

app.use("/", indexRouter);
app.use("/user", userRouter);

// catch 404 and forward to error handler
app.use((_req, _res, next) => {
  next(404);
});

// error handler
app.use((_err, _req, res, _next) => {
  // console.debug(_err);
  res.status(404).sendFile(path.join(ASSET_FOLDER, "404.html"));
});
