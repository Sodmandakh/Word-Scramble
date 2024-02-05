import { WordModel } from "../models/word-model.js";

export const getAllWord = async (req, res) => {
  try {
    const words = await WordModel.find();
    res.status(200).json({ words: words });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createWord = async (req, res) => {
  console.log(req.body);
  const { word , category, hint } = req.body;
  try {

    const wordData = await WordModel.create({
      word: word,
      category:category,
      hint:hint,
    });

    res.status(200).json({ wordData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
