const router = require("express").Router();
const passport = require("../../config/passport");
const usersController = require("../../controllers/usersController");

// Matches with "/api/signup"
router.route("/signup/")
  .post(usersController.create);

// Matches with "/api/signup"
router.route("/login/")
  .post(passport.authenticate("local"), usersController.login);

// Matches with "/api/posts/:id"
router.route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;