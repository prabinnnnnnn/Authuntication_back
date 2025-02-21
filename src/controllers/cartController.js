import Cart from "../models/cart.js";
import cartServices from "../services/cartServices.js";
import mongoose from "mongoose";

const addItemToCart = async (req, res) => {
  try {
    const { product, user, quantity = 1 } = req.body;

    // Input validation
    if (!product || !mongoose.Types.ObjectId.isValid(product)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid product ID" });
    }

    if (!user || !mongoose.Types.ObjectId.isValid(user)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid user ID" });
    }

    const cart = await cartServices.addItemToCart(product, user, quantity);

    if (!cart) {
      return res
        .status(400)
        .json({ success: false, message: "Failed to add item to cart" });
    }

    res.status(201).json({
      success: true,
      message: "Item added to cart successfully",
      data: cart,
    });
  } catch (error) {
    console.error("Error adding item to cart:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

const removeItemFromCart = async (req, res) => {
  try {
    const { product, user } = req.body;

    // Input validation
    if (!product || !mongoose.Types.ObjectId.isValid(product)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid product ID" });
    }

    if (!user || !mongoose.Types.ObjectId.isValid(user)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid user ID" });
    }

    const cart = await cartServices.removeItemFromCart(product, user);

    if (!cart) {
      return res
        .status(400)
        .json({ success: false, message: "Failed to remove item from cart" });
    }

    res.status(200).json({
      success: true,
      message: "Item removed from cart successfully",
      data: cart,
    });
  } catch (error) {
    console.error("Error removing item from cart:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

export { addItemToCart, removeItemFromCart };
