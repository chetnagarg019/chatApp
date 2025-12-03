import express from "express";
import Note from "../models/Note.js";

const router = express.Router();

// Add note
router.post("/add", async (req, res) => {
  const { title, content, userId } = req.body;
  try {
    const note = await Note.create({ title, content, userId });
    res.json({ message: "Note added successfully", note });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all notes
router.get("/read", async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete note
router.delete("/notes/:id", async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Note deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update note
router.put("/notes/:id", async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: "Note updated", note });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
