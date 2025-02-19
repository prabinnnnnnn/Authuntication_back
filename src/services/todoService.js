import TodoList from "../models/todolist.js";

const createTodoList = async (title, task, user) => {
  return await TodoList.create(title, task, user);
};

const deleteTodoList = async (id) => {
  return await User.findByIdAndDelete(id);
};

// const updateTodoList = async (id, userData) => {
//   return await User.findByIdAndUpdate(id, userData);
// };

export default {
  createTodoList,
  deleteTodoList,
};
