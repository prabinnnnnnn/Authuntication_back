import User from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import signupService from "../services/authService.js";

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

    res.cookie("sessionId", token, { httpOnly: true });
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error signing up.");
  }
};

const loginPage = (req, res) => {
  res.render("login");
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.redirect("/auth/login");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.redirect("/auth/login");
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.cookie("sessionId", token, { httpOnly: true });
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error logging in.");
  }
};

const logout = (req, res) => {
  res.clearCookie("sessionId");
  res.redirect("/auth/login");
};

export { signupPage, signup, loginPage, login, logout };
