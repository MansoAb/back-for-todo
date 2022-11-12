const Todo = require("../models /todo.model");

module.exports.controllers = {
  for_get: async function (req, res) {
    const TodoAw = await Todo.find();
    res.json(TodoAw);
  },
  for_post: async function (req, res) {
    const { text, bl } = req.body;
    await Todo.create({
      text,
      bl,
    });
    res.json("Дело добавлено.");
  },
  for_delete: async function (req, res) {
    const { id } = req.params;
    try {
      await Todo.findByIdAndRemove(id);
      res.json(`Пользователь с ид: ${id}, удален.`);
    } catch (err) {
      res.json(err);
    }
  },
  for_patch: async function (req, res) {
    const { id } = req.params;
    const { bl } = req.body;
    try {
      await Todo.findByIdAndUpdate(id, { bl: bl });
      res.json("mans");
    } catch (err) {
      res.json(err);
    }
  },
};
