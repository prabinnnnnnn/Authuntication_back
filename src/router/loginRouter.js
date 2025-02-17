// routers/login.js
const express = require("express");
const router = express.Router();
const { loginPage, login } = require("../controllers/loginController");

router.get("/", loginPage);
router.post("/", login);

module.exports = router;
