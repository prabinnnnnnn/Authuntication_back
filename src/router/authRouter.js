import express from "express";
import passport from "../middlewares/authMiddleware.js";
import { loginPage, login, signupPage, signup, logout, } from "../controllers/authContoller.js";

const router = express.Router();

// Normal Auth Routes
router.get("/login", loginPage);
router.post("/login", login);
router.get("/signup", signupPage);
router.post("/signup", signup);
router.get("/logout", logout);

// GitHub Authentication Routes
router.get("/github", passport.authenticate("github", { scope: ["user:email"] }),);

router.get("/github/callback", passport.authenticate("github", { failureRedirect: "/auth/login" }),
  (req, res) => {
    const { token } = req.user;
    res.cookie("sessionId", token, { httpOnly: true });
    res.redirect("/");
  },
);

export default router;
