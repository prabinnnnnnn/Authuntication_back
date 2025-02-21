import express from "express";
import {
  addItemToCart,
  removeItemFromCart,
} from "../controllers/cartController.js";

const router = express.Router();

router.post("/add", addItemToCart);
router.delete("/remove", removeItemFromCart);

export default router;
