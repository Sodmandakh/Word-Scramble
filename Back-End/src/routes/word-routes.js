import express from "express";
import {
    getAllWord,
    createWord,
} from "../controllers/word-controller.js";
export const wordRouter = express.Router();


wordRouter.get("/word", getAllWord),
wordRouter.post("/createWord", createWord)
