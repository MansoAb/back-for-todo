const User = require("../models /User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.controllersUsers = {
  registerUser: async (req, res) => {
    const { login, password } = req.body;
    try {
      const hash = await bcrypt.hash(password, Number(process.env.HASH_ROUTE));
      const user = await User.create({ login: login, password: hash });

      return res.json(user);
    } catch (e) {
      return res.json(e);
    }
  },

  login: async (req, res) => {
    const { login, password } = req.body;

    const candidate = await User.findOne({ login });
    if (!candidate) {
      return res.status(401).json({ error: "Mdn" });
    }

    const valid = await bcrypt.compare(password, candidate.password);

    if (!valid) {
      return res.status(401).json("Неверный пароль");
    }

    const payload = {
      id: candidate.id,
      login: candidate.login,
    };

    const token = jwt.sign(payload, process.env.SECRET_PASSWORD, {
      expiresIn: "24h",
    });

    return res.json(token);
  },
};
