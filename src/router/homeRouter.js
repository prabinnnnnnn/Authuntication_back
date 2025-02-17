// routers/home.js
const express = require("express");
const router = express.Router();
const {
  homepage,
  createTodoList,
  deleteTodoList,
} = require("../controllers/homeController");

const isAuthenticated = require("../middlewares/authMiddleware");
const { logout } = require("./logoutRouter");

router.get("/", isAuthenticated, homepage);

router.post("/", isAuthenticated, createTodoList);

router.get("/delete/:id", isAuthenticated, deleteTodoList);

router.get("/logout", isAuthenticated, logout);

module.exports = router;
