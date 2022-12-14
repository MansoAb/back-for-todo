const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  text: String,
  bl: Boolean,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
