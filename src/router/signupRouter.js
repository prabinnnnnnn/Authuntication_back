// routers/signin.js
const express = require("express");
const router = express.Router();
const { signupPage, signup } = require("../controllers/signupController");

router.get("/", signupPage);
router.post("/", signup);

module.exports = router;
