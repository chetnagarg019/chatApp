import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/notes/add", { userId: "123", title, content });
      alert("Note added successfully");
      navigate("/viewall", { state: { refresh: true } }); // navigate and trigger refresh
    } catch (err) {
      alert(err.response?.data?.message || "Add failed");
    }
  };

  const handleDownload = () => {
    const text = `Title: ${title}\n\nContent: ${content}`;
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${title || "note"}.txt`;
    a.click();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
      <div className="w-full max-w-xl bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/20">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">✍️ Add Your Note</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label className="text-white text-lg font-medium">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter note title"
              className="w-full mt-2 p-3 rounded-xl bg-white/20 text-white border border-white/30"
              required
            />
          </div>
          <div>
            <label className="text-white text-lg font-medium">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your content here..."
              className="w-full mt-2 p-3 h-40 rounded-xl bg-white/20 text-white border border-white/30"
              required
            ></textarea>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <button type="submit" className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl">
              ➕ Add Note
            </button>
            <button type="button" onClick={handleDownload} className="w-full py-3 bg-white/20 text-white rounded-xl">
              📥 Download Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
