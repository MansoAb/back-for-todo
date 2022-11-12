const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  text: String,
  bl: Boolean,
});

const Todo = mongoose.model("Todo", studentSchema);

module.exports = Todo;
