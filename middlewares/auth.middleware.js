const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.json("Веб токен не найден.");
  }

  const [type, token] = authorization.split(" ");

  if (type !== "Bearer") {
    return res.status(401).json("Неверный тип токена");
  }
  try {
    req.user = await jwt.verify(token, process.env.SECRET_PASSWORD);

    next();
  } catch (e) {
    return res.status(401).json("неверный токен" + e.toString());
  }
};
