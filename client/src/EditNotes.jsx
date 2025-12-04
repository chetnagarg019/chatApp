import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditNotes = () => {
  const { id } = useParams(); // URL se note id le rahe
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Existing note fetch karna
  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/notes/${id}`);
        setTitle(res.data.title);
        setContent(res.data.content);
      } catch (err) {
        console.log(err);
      }
    };
    fetchNote();
  }, [id]);

  // Update note submit
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/notes/${id}`, { title, content });
      alert("Note updated successfully!");
      navigate("/viewall"); // wapas view all page pe redirect
    } catch (err) {
      console.log(err);
      alert("Update failed!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">Edit Note</h1>
        <form onSubmit={handleUpdate} className="flex flex-col gap-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="border p-2 rounded"
            required
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            className="border p-2 rounded h-40"
            required
          />
          <button type="submit" className="bg-blue-500 text-white py-2 rounded">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditNotes;
