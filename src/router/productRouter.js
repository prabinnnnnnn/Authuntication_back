import express from "express";
import {
  getAllProducts,
  AddProduct,
  deleteProduct,
  updateProduct,
  getProductById,
} from "../controllers/productController.js";
import productMulter from "../middlewares/multerMiddelware.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", productMulter.single("image"), AddProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", productMulter.single("image"), updateProduct);

export default router;
