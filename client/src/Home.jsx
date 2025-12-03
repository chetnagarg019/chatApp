

import React from "react";
import { Link } from "react-router-dom";
import viewall from "./ViewAll";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 px-4">

      <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl p-10 rounded-3xl w-full max-w-2xl text-center animate-fadeIn">

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-white drop-shadow-md mb-4">
          ✨ Welcome to Notes App
        </h1>

        <p className="text-white/80 text-lg mb-10 tracking-wide">
          Manage your notes smartly — Add, Edit, Save, Download!
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-5">

          {/* Login */}
          <Link to="/login">
            <button className="w-full cursor-pointer py-3 text-lg font-semibold text-white bg-white/20 hover:bg-white/30 backdrop-blur-md 
              rounded-xl border border-white/40 shadow-lg transition-all duration-300 hover:scale-105">
              🔐 Login
            </button>
          </Link>

          {/* Signup */}
          <Link to="/signup">
            <button className="w-full cursor-pointer py-3 text-lg font-semibold text-white bg-white/20 hover:bg-white/30 backdrop-blur-md 
              rounded-xl border border-white/40 shadow-lg transition-all duration-300 hover:scale-105">
              📝 Signup
            </button>
          </Link>

          {/* Add Note */}
          <Link to="/addnote">
            <button className="w-full cursor-pointer py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-600 
              hover:from-indigo-600 hover:to-purple-500 rounded-xl shadow-xl transition-all duration-300 hover:scale-105">
              ➕ Add a Note
            </button>
          </Link>

          <Link to="/viewall">
  <button className="w-full cursor-pointer py-3 text-lg font-semibold text-white bg-white/20 hover:bg-white/30 backdrop-blur-md 
    rounded-xl border border-white/40 shadow-lg transition-all duration-300 hover:scale-105">
    📄 View All Notes
  </button>
</Link>


        </div>
      </div>
    </div>
  );
};

export default Home;

//craete => seprated page (done)
//Read => Home page pr hi hota hai 
//Delete => home page pr hr note ke card me hota hai 
//updated => seprate page 

