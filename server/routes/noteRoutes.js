import express from "express";
import Notes from "../model/notes.js";

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const { userId, title, content } = req.body;

    if (!userId || !title || !content) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    const note = new Notes({
    userId: userId,
    title: title,
    content: content
});

    await note.save();

    res.json({ message: "Notes saved", note });
  } catch (error) {
    res.status(500).json({ message: "Error Occur" });
  }
});

export default router;
