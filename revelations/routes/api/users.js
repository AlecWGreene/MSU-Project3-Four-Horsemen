const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/posts"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/posts/:id"
router.route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;
