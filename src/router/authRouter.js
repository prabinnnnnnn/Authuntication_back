const express = require("express");
const router = express.Router();
const {
  loginPage,
  login,
  signupPage,
  signup,
  logout,
} = require("../controllers/authContoller");

router.get("/login", loginPage);
router.post("/login", login);
router.get("/signup", signupPage);
router.post("/signup", signup);
router.get("/logout", logout);

module.exports = router;
