const homepageRouter = require("./homeRouter");
const signInPageRouter = require("./signupRouter");
const loginRouter = require("./loginRouter");

const router = (app) => {
  app.use("/", homepageRouter);
  app.use("/signup", signInPageRouter);
  app.use("/login", loginRouter);
};

module.exports = router;
