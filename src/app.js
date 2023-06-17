import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./router/index";

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(morgan("dev"));
app.use("/", router);

export default  app;
