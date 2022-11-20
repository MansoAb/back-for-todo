const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(require("./routes/todo.route"));
app.use(require("./routes/users.route"));

mongoose
  .connect(process.env.MONGO_SERVER, {})
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB")); //

app.listen(process.env.PORT, function () {
  console.log("Сервер запущен.");
});
