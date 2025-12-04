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

// ✅ New: Get all notes 
router.get("/read", async (req, res) => {
  try {
    const notes = await Notes.find(); // all notes fetch
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching notes" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const note = await Notes.findById(req.params.id);
    res.json(note);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update note
router.put("/:id", async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedNote = await Notes.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    res.json(updatedNote);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete note
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Notes.findByIdAndDelete(id);
    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting note" });
  }
});





export default router;
