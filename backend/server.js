import dotenv from "dotenv";
import express from "express";

import authRoutes from "./routes/auth.routes.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

app.use("/api/auth", authRoutes);
// app.use("/api/messages", messageRoutes);
// app.use("/api/users", userRoutes);
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
