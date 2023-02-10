import Express from "express";
import dotenv from "dotenv";
import cors from "cors";
import api from "./api";

dotenv.config();

const app = Express();

app.use(Express.json());
app.use(cors({ origin: process.env.CLIENT_URL }));

app.use("/api/v1", api);

export default app;
