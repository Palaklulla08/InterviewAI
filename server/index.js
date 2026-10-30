import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/connectDb.js";
// import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const app = express();

connectDb();


const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());

app.get(`/`, (req, res) => {
   return res.json(`Server is running on port ${port}`);
});
app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});