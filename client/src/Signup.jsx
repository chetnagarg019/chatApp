import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:5000/api/signup",
      formData
    );

    alert(res.data.message); // Signup successful
    console.log("Signup Response:", res.data);

  } catch (error) {
    alert(error.response?.data?.message || "Signup failed");
    console.error("Signup Error:", error);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow p-6">
        <h2 className="text-2xl font-bold text-center mb-6 dark:text-white">Create Account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium dark:text-gray-200">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium dark:text-gray-200">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium dark:text-gray-200">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              placeholder="Create a password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl font-semibold"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm mt-4 dark:text-gray-300">
          Already have an account? <Link to='/login' className="text-blue-600">Login</Link>
        </p>
      </div>
    </div>
  );
}
