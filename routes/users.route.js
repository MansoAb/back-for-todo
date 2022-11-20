const { Router } = require("express");
const router = Router();
const { controllersUsers } = require("../controllers/user.controllers");

router.post("/users/register", controllersUsers.registerUser);
router.post("/users/login", controllersUsers.login);

module.exports = router;
