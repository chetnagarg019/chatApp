import express from "express";
dotenv.config()
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authroutes from "./routes/authroutes.js"

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api",authroutes);

connectDB();


app.get("/", (req, res) => {
  res.send("Hello I am default");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
