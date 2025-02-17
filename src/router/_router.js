const homepageRouter = require("./homeRouter");
const authRouter = require("./authRouter");

const router = (app) => {
  app.use("/", homepageRouter);
  app.use("/auth", authRouter);
};

module.exports = router;
