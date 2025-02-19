import multer from "multer";
import * as fs from "fs";

const useStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = `public/uploads/productImage`;
    fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const productMulter = multer({ storage: useStorage });

export default productMulter;
