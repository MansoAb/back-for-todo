const { Router } = require("express");
const router = Router();
const { controllers } = require("../controllers/todo.controllers");
const authMiddleware = require("../middlewares/auth.middleware");

router.get("/todos", controllers.for_get);
router.post("/todos", authMiddleware, controllers.for_post);
router.delete("/todos/:id", authMiddleware, controllers.for_delete);
router.patch("/todos/:id", authMiddleware, controllers.for_patch);

module.exports = router;
