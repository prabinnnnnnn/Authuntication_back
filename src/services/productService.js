import Product from "../models/product.js";

const getAllProducts = async () => {
  return await Product.find();
};

const AddProduct = async (
  title,
  price,
  description,
  category,
  quantity,
  image,
) => {
  return await Product.create({
    title,
    price,
    description,
    category,
    quantity,
    image,
  });
};

const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};

const updateProduct = async (
  id,
  title,
  price,
  description,
  category,
  quantity,
  image,
) => {
  try {
    const product = await Product.findById(id);
    product.title = title;
    product.price = price;
    product.description = description;
    product.category = category;
    product.quantity = quantity;
    product.image = image;
    return await product.save();
  } catch (error) {
    return error;
  }
};

const getProductById = async (id) => {
  return await Product.findById(id);
};

export default {
  getAllProducts,
  AddProduct,
  deleteProduct,
  updateProduct,
  getProductById,
};
