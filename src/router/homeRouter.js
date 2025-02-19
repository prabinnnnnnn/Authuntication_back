import express from "express";
import {
  deleteTodoList,
  homepage,
  createTodoList,
} from "../controllers/todoController.js";

// middlewares
import isAuthenticated from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", isAuthenticated, homepage);
router.post("/", isAuthenticated, createTodoList);
router.get("/delete/:id", isAuthenticated, deleteTodoList);

export default router;
