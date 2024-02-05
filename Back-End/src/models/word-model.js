import mongoose from "mongoose";


const wordSchema = new mongoose.Schema({
    word:String,
    category: String,
    hint: String
  });
  export const WordModel = mongoose.model("Word", wordSchema);