import express from "express";
import cors from "cors";
import algorithmRoutes from "./routes/algoRoutes";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", algorithmRoutes);

export default app;
