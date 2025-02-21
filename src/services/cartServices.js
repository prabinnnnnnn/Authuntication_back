import Cart from "../models/cart.js";

const addItemToCart = async (product, user, quantity) => {
  try {
    let cartItem = await Cart.findOne({ product, user });

    if (cartItem) {
      cartItem.quantity += quantity;
      await cartItem.save();
    } else {
      // Otherwise, create a new cart item
      cartItem = await Cart.create({ product, user, quantity });
    }

    return cartItem;
  } catch (error) {
    console.error("Error in addItemToCart service:", error);
    throw error;
  }
};

const removeItemFromCart = async (product, user) => {
  try {
    const cartItem = await Cart.findOneAndDelete({ product, user });
    return cartItem;
  } catch (error) {
    console.error("Error in removeItemFromCart service:", error);
    throw error;
  }
};

export default { addItemToCart, removeItemFromCart };
