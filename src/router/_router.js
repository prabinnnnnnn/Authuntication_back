// _router.js
import authRouter from "./authRouter.js";
import homeRouter from "./homeRouter.js";
import productRouter from "./productRouter.js";
import cartRouter from "./cartRouter.js";

const router = (app) => {
  app.use("/", homeRouter);
  app.use("/product", productRouter);
  app.use("/cart", cartRouter);
  app.use("/auth", authRouter);
};

export default router;
