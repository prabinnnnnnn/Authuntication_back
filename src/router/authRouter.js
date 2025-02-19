import express from "express";
import {
  loginPage,
  login,
  signupPage,
  signup,
  logout,
} from "../controllers/authContoller.js";

const router = express.Router();

router.get("/login", loginPage);
router.post("/login", login);
router.get("/signup", signupPage);
router.post("/signup", signup);
router.get("/logout", logout);

export default router;
