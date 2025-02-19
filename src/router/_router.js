import homepageRouter from "./homeRouter.js";
import authRouter from "./authRouter.js";
import productRouter from "./productRouter.js";

const router = (app) => {
  app.use("/", homepageRouter);
  app.use("/auth", authRouter);
  app.use("/product", productRouter);
};

export default router;
