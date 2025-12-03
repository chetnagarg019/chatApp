// import React from 'react'

// const ViewAll = () => {

//     app.get("/read", async (req,res) => {
//         try{
//             let card   = await find();
//             res.json(card);

//         }catch(error){
//             res.status(500).json({error : error.message});
//         }
//     });

//   return (
//     <div>
//       here are all cards available 
//     </div>
//   )
// }

// export default ViewAll

// // mujje isme sare cards show krna hai jo jo uswer add kr rha hai 
// // un cards ke niche 3 btn honge edit delet update 

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const NotesHome = () => {
//   const [notes, setNotes] = useState([]);
//   const navigate = useNavigate();

//   // Fetch all notes
//   const fetchNotes = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/read");
//       setNotes(res.data); // backend se aaya data set kar diya
//     } catch (error) {
//       console.log("Error fetching notes:", error);
//     }
//   };

//   // Fetch notes on component mount
//   useEffect(() => {
//     fetchNotes();
//   }, []);

//   // Delete note
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/notes/${id}`);
//       // UI me turant remove karo without reloading
//       setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
//     } catch (error) {
//       console.log("Error deleting note:", error);
//     }
//   };

//   // Edit note (redirect to EditNote page)
//   const handleEdit = (id) => {
//     navigate(`/editnote/${id}`);
//   };

//   return (
//     <div className="min-h-screen p-6 bg-gray-100">
//       <h1 className="text-3xl font-bold mb-6 text-center">📄 All Notes</h1>

//       {notes.length === 0 ? (
//         <p className="text-center text-gray-500">No notes available.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {notes.map((note) => (
//             <div
//               key={note._id}
//               className="bg-white shadow rounded-lg p-4 flex flex-col justify-between"
//             >
//               <div>
//                 <h2 className="text-xl font-semibold mb-2">{note.title}</h2>
//                 <p className="text-gray-700">{note.content}</p>
//               </div>

//               <div className="flex justify-between mt-4">
//                 <button
//                   onClick={() => handleEdit(note._id)}
//                   className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
//                 >
//                   Edit
//                 </button>

//                 <button
//                   onClick={() => handleDelete(note._id)}
//                   className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
//                 >
//                   Delete
//                 </button>

//                 <button
//                   onClick={() => alert("Update functionality can be handled in Edit page")}
//                   className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
//                 >
//                   Update
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default NotesHome;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const NotesHome = () => {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const fetchNotes = async () => {
    try {
      const res = await axios.get("http://localhost:5000/read");
      setNotes(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchNotes(); // fetch on mount and also when navigated from AddNote
  }, [location]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/notes/${id}`);
      setNotes(notes.filter((note) => note._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (id) => {
    navigate(`/editnote/${id}`);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">📄 All Notes</h1>
      {notes.length === 0 ? (
        <p className="text-center text-gray-500">No notes available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <div key={note._id} className="bg-white shadow rounded-lg p-4 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2">{note.title}</h2>
                <p className="text-gray-700">{note.content}</p>
              </div>
              <div className="flex justify-between mt-4">
                <button onClick={() => handleEdit(note._id)} className="bg-blue-500 text-white px-3 py-1 rounded">Edit</button>
                <button onClick={() => handleDelete(note._id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                <button onClick={() => alert("Update handled in Edit page")} className="bg-green-500 text-white px-3 py-1 rounded">Update</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotesHome;

