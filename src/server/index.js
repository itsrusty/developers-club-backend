import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import colors from "colors";
import routerUser from "../routes/user.routes.js";
import connectionDB from "../config/mongoose.config.js";

dotenv.config();
connectionDB();

// TODO: configs
const app = express();
const PORT = process.env.PORT || 5000;

// TODO: middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// endpoints
app.use(routerUser);

// PORT defaults
const bootstrap = () => {
  try {
    app.listen(PORT);
    console.log(`listening on port ${PORT}`.bgCyan)
  } catch (error) {
    throw new Error(error);
  }
};

bootstrap()