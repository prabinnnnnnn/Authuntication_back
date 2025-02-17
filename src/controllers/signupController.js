const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const signupService = require("../service/signinServer");

const signupPage = (req, res) => {
  res.render("signup");
};

const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const newUser = await signupService.createAccount(
      username,
      email,
      password
    );

    await newUser.save();
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.cookie("token", token, { httpOnly: true });
    res.redirect("/login");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error signing up.");
  }
};

module.exports = { signupPage, signup };
