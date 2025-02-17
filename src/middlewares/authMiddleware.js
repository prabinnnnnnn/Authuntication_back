const jwt = require("jsonwebtoken");

const isAuthenticated = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.redirect("/login");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id; // attach the user id to request
    next();
  } catch (error) {
    console.error("Invalid token", error);
    return res.redirect("/login");
  }
};

module.exports = isAuthenticated;
