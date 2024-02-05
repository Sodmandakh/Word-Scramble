import express from "express";
import { wordRouter } from "./routes/word-routes.js";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(wordRouter);


const connectWordDb = async () => {
    await mongoose.connect(
      "mongodb+srv://WordScramble:Word-Scramble@word-scramble.f579ohl.mongodb.net/"
    );
    console.log("Word database connected");
  };

  connectWordDb()

app.listen(8000, () => {
    console.log(`Your server running on: http://localhost:8000`); 
  });