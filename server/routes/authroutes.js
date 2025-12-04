import express from "express";
import User from "../model/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const router = express.Router();

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "User are already exist" });
    }

    //password
    const hashPassword = await bcrypt.hash(password, 10);

    //create new user
    const user = await User.create({
      name,
      email,
      password: hashPassword,
    });
      await user.save();

    res.status(201).json({ message: "signup succesfull", user });
  } catch (err) {
    console.log("Signup error:", err);
    res.status(500).json({ message: "signup failed" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "user not exist pls sign in" });
    }

    //compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }



    res.status(201).json({
      message: "login succesfull",
      user,
    });
  } catch (err) {
    console.log("Login error:", err);
    res.status(500).json({ message: "server error" });
  }
});

export default router;
