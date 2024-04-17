import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/Database.js";
import MessageRouter from "./routes/MessageRouter.js";

dotenv.config();
connectDB();
const app = express();

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/message", MessageRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
