import User from "../models/user.js";
import bcrypt from "bcrypt";

const createAccount = async (username, email, password, avatar) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(avatar)
  return await User.create({ username, email, password: hashedPassword, avatar });
};

export default { createAccount };
