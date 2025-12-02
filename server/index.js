import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authroutes from "./routes/authroutes.js";
import noteRoutes from "./routes/noteRoutes.js";
dotenv.config()

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api",authroutes);
app.use("/api/notes",noteRoutes);

connectDB();


app.get("/", (req, res) => {
  res.send("Hello I am default");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
