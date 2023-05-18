import express from "express";
import cors from "cors";

import { errorHandler } from "./src/error.js";
import { ASSET_FOLDER, PORT } from "./src/config.js";

import userRouter from "./routes/user.js";

const app = express();

app.listen(PORT, () => console.info(`listening on port ${PORT}`));

app.use(cors());
app.use(express.json());
app.use(express.static(ASSET_FOLDER));

app.use("/", userRouter);

// catch 404 and forward to `errorHandler`
app.use((_req, _res, next) => next(404));
app.use(errorHandler);