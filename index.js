const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use(require("./routes/todo.route"));
const port = 3001;

mongoose
  .connect("mongodb+srv://Mansur:1954@cluster0.xyb0huh.mongodb.net/Todos", {})
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB")); //

app.listen(port, function () {
  console.log("Сервер запущен.");
});
