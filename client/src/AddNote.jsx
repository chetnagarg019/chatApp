// import React from 'react'

// const AddNote = () => {
//   return (
//     <div>
//         <h1>Hello your notes is here pls type your favourite note here.</h1>
      
//     </div>
//   )
// }

// export default AddNote

// // isme mujje input type title contnet sb krna hai design krna hai or data to database me save ho hi rha hai thik 
// // fr uske baddownload ka option lgana hai accha dikhe 

import React, { useState } from "react";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/notes/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: "123456", 
        title,
        content,
      }),
    });

    const data = await res.json();
    console.log("Note Saved:", data);
    alert("Note Added Successfully! 🎉");
  };

  // Download feature (frontend only)
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
      
      <div className="w-full max-w-xl bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/20 animate-fadeIn">
        
        <h1 className="text-3xl font-bold text-white mb-8 text-center drop-shadow-md">
          ✍️ Add Your Note
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

          {/* Title Input */}
          <div>
            <label className="text-white text-lg font-medium">Title</label>
            <input
              type="text"
              placeholder="Enter your note title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full mt-2 p-3 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30 backdrop-blur-lg focus:ring-2 focus:ring-white focus:outline-none"
              required
            />
          </div>

          {/* Content Input */}
          <div>
            <label className="text-white text-lg font-medium">Content</label>
            <textarea
              placeholder="Write your content here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full mt-2 p-3 h-40 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30 backdrop-blur-lg focus:ring-2 focus:ring-white focus:outline-none"
              required
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 mt-4">

            {/* Add Note */}
            <button
              type="submit"
              className="w-full py-3 text-lg font-semibold rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-xl transition-all duration-300 hover:scale-105 hover:from-indigo-600 hover:to-purple-500"
            >
              ➕ Add Note
            </button>

            {/* Download Note */}
            <button
              type="button"
              onClick={handleDownload}
              className="w-full py-3 text-lg font-semibold rounded-xl bg-white/20 text-white border border-white/40 backdrop-blur-md shadow-lg hover:bg-white/30 transition-all duration-300 hover:scale-105"
            >
              📥 Download Note
            </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNote;


