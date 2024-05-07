import dotenv from "dotenv";
import express from "express";

import connectToMongoDB from "../db/connectToMongoDB.js";
import authRoutes from "./routes/auth.routes.js";

const PORT = process.env.PORT || 5000;
const app = express();
dotenv.config();

app.use(express.json());

app.use("/api/auth", authRoutes);
// app.use("/api/messages", messageRoutes);
// app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server is running on port ${PORT}`);
});
