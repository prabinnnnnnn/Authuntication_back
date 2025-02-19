import TodoList from "../models/todolist.js";
import User from "../models/user.js";

const homepage = async (req, res) => {
  if (!req.userId) {
    return res.redirect("/signup");
  }
  try {
    const todoList = await TodoList.find({ user: req.userId });
    const user = await User.findById(req.userId);
    return res.render("home", { todoList, username: user.username });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error fetching todo list");
  }
};

const createTodoList = async (req, res) => {
  try {
    const { title, task } = req.body;
    if (!title && !task) return res.redirect("/");
    await TodoList.create({ title, task, user: req.userId });
    return res.redirect("/");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteTodoList = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send("Invalid request: ID is required");
    }
    const todoItem = await TodoList.findOne({ _id: id, user: req.userId });
    if (!todoItem) {
      return res.status(404).send("Todo not found or unauthorized");
    }
    await TodoList.findByIdAndDelete(id);
    return res.redirect("/");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export { homepage, createTodoList, deleteTodoList };
