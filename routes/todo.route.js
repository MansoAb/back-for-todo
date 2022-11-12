const { Router } = require("express");
const router = Router();
const { controllers } = require("../controllers/todo.controllers");

router.get("/todos", controllers.for_get);
router.post("/todos", controllers.for_post);
router.delete("/todos/:id", controllers.for_delete);
router.patch("/todos/:id", controllers.for_patch);

module.exports = router;
