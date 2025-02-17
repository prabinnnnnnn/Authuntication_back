const User = require("../models/user");
const bcrypt = require("bcrypt");
// Hash password before saving

const createAccount = async (username, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return await User.create({ username, email, password: hashedPassword });
};

// const deleteAccount = async (id) => {
//   return await User.findByIdAndDelete(id);
// };

// const updateAccount = async (id, userData) => {
//   return await User.findByIdAndUpdate(id, userData);
// };

// // const getAllUser = async () => {
// //   return await User.find();
// // };

// // const getUserById = async (id) => {
// //   return await User.findById(id);
// // };

module.exports = {
  createAccount,
  //   deleteAccount,
  //   updateAccount,
};
