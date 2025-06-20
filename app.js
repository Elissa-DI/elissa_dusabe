import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

app.get("/", (req, res) => {
  res.send("Hello DevOps!");
});