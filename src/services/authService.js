import User from "../models/user.js";
import bcrypt from "bcrypt";

const createAccount = async (username, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return await User.create({ username, email, password: hashedPassword });
};

export default {
  createAccount,
};
