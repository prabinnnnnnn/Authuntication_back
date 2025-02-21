// app.js
import dotenv from "dotenv";
dotenv.config();
import router from "./src/router/_router.js";
import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(cookieParser());

app.set("view engine", "ejs");
app.set("views", path.resolve("./src/views"));

// Load routers AFTER middleware
router(app);

export default app;
