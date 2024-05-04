import { config } from "dotenv";
import express from "express";
config();
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({
    message: "Hello world",
  });
});
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
