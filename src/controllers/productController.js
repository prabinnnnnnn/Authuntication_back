import productServices from "../services/productService.js";
import path from "path";
import fs from "fs";

const AddProduct = async (req, res) => {
  try {
    const { title, price, description, category, quantity } = req.body;

    let image = null;
    if (req.file) {
      const imageName = req.file.filename;
      image = `uploads/product/${imageName}`;
    }

    const product = await productServices.AddProduct(
      title,
      price,
      description,
      category,
      quantity,
      image,
    );

    res.status(201).json({
      success: true,
      message: "Added item successfull",
      data: product,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productServices.deleteProduct(id);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await productServices.getAllProducts();
    res.status(200).json({
      success: true,
      message: "All products fetched successfully",
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, price, description, category, quantity } = req.body;

    let image = null;
    const existingProduct = await productServices.getProductById(id);

    if (!existingProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    if (req.file) {
      // Delete old image if it exists
      if (existingProduct.image) {
        const oldImagePath = path.join(
          "uploads/product",
          path.basename(existingProduct.image),
        );
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }

      // Set new image path
      const imageName = req.file.filename;
      image = `uploads/product/${imageName}`;
    } else {
      image = existingProduct.image; // Retain the old image if none is uploaded
    }

    const product = await productServices.updateProduct(
      id,
      title,
      price,
      description,
      category,
      quantity,
      image,
    );

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productServices.getProductById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product fetched successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export {
  AddProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
  getProductById,
};
