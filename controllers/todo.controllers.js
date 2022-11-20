const Todo = require("../models /todo.model");
const jwt = require("jsonwebtoken");

module.exports.controllers = {
  for_get: async function (req, res) {
    const TodoAw = await Todo.find();
    res.json(TodoAw);
  },
  for_post: async function (req, res) {
    const { text, bl } = req.body;

    try {
      const todo = await Todo.create({
        text,
        bl,
        userId: req.user.id,
      });
      return res.json(todo);
    } catch (e) {
      return res.json(e);
    }
  },
  for_delete: async function (req, res) {
    const { id } = req.params;

    try {
      const todo = await Todo.findById(id);
      if (todo.userId.toString() === req.user.id) {
        await todo.remove();

        return res.json(todo);
      }

      return res.json("Нет доступа.");
    } catch (err) {
      return res.json(Error);
    }
  },
  for_patch: async function (req, res) {
    const { id } = req.params;
    const { bl } = req.body;

    try {
      const todo = await Todo.findById(id);
      console.log(todo.userId.toString());
      if (todo.userId.toString() === req.user.id) {
        await todo.update({ bl });

        return res.json(todo);
      }
      return res.json(Error);
    } catch (e) {
      return res.json(Error);
    }
  },
};
