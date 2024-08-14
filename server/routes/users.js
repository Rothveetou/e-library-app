const auth = require("../middleware/auth");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const { User, validate } = require("../models/users");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  res.send(user);
});

// Sign up
router.post("/signup", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { email, password } = req.body;
  let user = await User.findOne({ email });
  if (user) return res.status(400).json("User already registered");

  const hashPassword = await bcrypt.hash(password, 10);
  user = new User({ email, password: hashPassword });
  await user.save();

  return res.json({ status: true, message: "Record Registered user" });
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json("User is not registered");

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).json("Password is incorrect");

  const token = jwt.sign({ id: user._id }, process.env.KEY, {
    expiresIn: "1h",
  });
  res.cookie("token", token, { httpOnly: true, maxAge: 1800 });
  return res.json({ status: true, message: "Login Successfully" });
});

// Forgot password
router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.json({ message: "User is not registered" });

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "mengrothvitou.it@gmail.com",
        pass: "Zelletorichhard1!",
      },
    });
    const token = jwt.sign({ id: user._id }, process.env.KEY, {
      expiresIn: "1h",
    });
    const encodedToken = encodeURIComponent(token).replace(/\./g, "%2E");

    let mailOptions = {
      from: "mengrothvitou.it@gmail.com",
      to: email,
      subject: "Reset Your Password",
      text: `http://localhost:5173/resetPassword/${encodedToken}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(`Message failed: ${error}`);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  } catch (err) {
    console.log(err);
  }
});

// Reset password
router.post("/reset-password/:token", async (req, res) => {
  const token = req.params.token;
  const { password } = req.body;
  try {
    const decoded = await jwt.verify(token, process.env.KEY);
    const id = decoded.id;
    const hashPassword = await bcrypt.hash(password, 10);
    await User.findByIdAndUpdate({ _id: id }, { password: hashPassword });
    return res.json({ status: true, message: "Updated successfully" });
  } catch (err) {
    console.log("Failed to update the new password", err);
  }
});

// Verify user
const verifyUser = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.json({ status: false, message: "No Token" });
    }
    const decoded = await jwt.verify(token, process.env.KEY);
    req.user = decoded;
    next();
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
};

router.get("/verify", verifyUser, (req, res) =>
  res.json({ status: true, message: "Authorized the users" })
);

// Logout
router.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ status: true });
});

// Get user count
router.get("/user-count", async (req, res) => {
  try {
    const userCount = await User.countDocuments();
    return res.json({ status: true, userCount });
  } catch (err) {
    console.log("Error fetching user count:", err);
    return res.status(500).json({ status: false, message: "Server error" });
  }
});

module.exports = router;
